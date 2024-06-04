import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { connect } from "@/app/config/dbConfig";

connect();

export async function GET(request: NextRequest) {
  try {
    // call getDataFromToken to handle request
    const userId = await getDataFromToken(request);

    // Get user data. (you can deselect password, isAdmin as well)
    const fetchedUser = await User.findOne({ _id: userId }).select("-password");

    return NextResponse.json({
      message: "User Found",
      data: fetchedUser,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 }
    );
  }
}
