import { connect } from "@/app/config/dbConfig";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    // Post request body
    const reqbody = await request.json();

    // Destructure user data from request body
    const { username, email, password } = reqbody;
    console.log(reqbody);

    // Check if user already exists
    const userData = await User.findOne({ email });

    if (userData) {
      return NextResponse.json(
        {
          error: "User already exists.",
        },
        { status: 400 }
      );
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashPass,
    });

    // Save new user
    const saveNewUser = await newUser.save();
    console.log(saveNewUser);

    // Return user created
    return NextResponse.json(
      {
        message: "User created successfully.",
        success: true,
        user: saveNewUser,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Something went wrong while creating the user.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
