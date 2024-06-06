import { NextResponse, NextRequest } from "next/server";

// Middleware to handle authentication and redirection
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Public paths that do not require authentication
  const isPublicPath =
    path === "/login" || path === "/signup" || path === "/verifyemail";

  // Fetch token from cookies
  const token = request.cookies.get("token")?.value;

  // Redirect authenticated users away from public paths
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  // Redirect unauthenticated users to login page if accessing protected paths
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // Allow the request to proceed if it does not match any redirect conditions
  return NextResponse.next();
}

// Configure the middleware to match specific paths
export const config = {
  matcher: ["/profile", "/profile/:path*", "/login", "/signup", "/verifyemail"],
};
