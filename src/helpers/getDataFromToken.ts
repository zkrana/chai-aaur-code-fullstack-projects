import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

// This function extract user data from cookies for login user.

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decryptToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return decryptToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
