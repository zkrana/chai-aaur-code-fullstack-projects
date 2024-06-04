import { connect } from "@/app/config/dbConfig";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqbody = await request.json();
    const { email, password } = reqbody;
    console.log("Request Body:", reqbody);

    // Check if user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      console.error("User not found:", email);
      return NextResponse.json(
        {
          error: "User not found.",
        },
        { status: 400 }
      );
    }

    // Validate password
    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      console.error("Incorrect password for user:", email);
      return NextResponse.json(
        { error: "Incorrect password." },
        { status: 400 }
      );
    }

    // Create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // Create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "2h",
    });

    const response = NextResponse.json({
      message: "Login successful.",
      success: true,
    });

    // Set token in cookies
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Ensure cookies are secure in production
      sameSite: "strict",
    });

    console.log("Login successful for user:", email);
    return response;
  } catch (error: any) {
    console.error("Login error:", error.message);
    return NextResponse.json(
      {
        message: "An error occurred during login.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
