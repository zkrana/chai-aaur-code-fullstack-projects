import { connect } from "@/app/config/dbConfig";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const reqBody = await request.json();

    // Destructure user data from request body
    const { username, email, password } = reqBody;
    console.log(reqBody);

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        {
          error: "User already exists.",
        },
        { status: 400 }
      );
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save new user
    const savedUser = await newUser.save();
    console.log(savedUser);

    // Send verification email
    await sendEmail({ email, emailtype: "VERIFY", userId: savedUser._id });

    // Return user created
    return NextResponse.json(
      {
        message: "User created successfully.",
        success: true,
        user: savedUser,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      {
        message: "Something went wrong while creating the user.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
