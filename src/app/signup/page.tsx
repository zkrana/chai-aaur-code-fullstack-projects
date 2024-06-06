"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignUp() {
  const router = useRouter();

  // Handle user data
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  // Handle button disabled state
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Handle loading state
  const [loading, setLoading] = useState(false);

  // Handle Signup
  const onSignUp = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success.", response.data);
      toast.success("User created successfully.");
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed.", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Form data validation
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="sm:min-h-[calc(100vh-152px)] min-h-[calc(100vh-120px)]  flex items-center justify-center bg-gray-100">
      <div className="bg-white text-gray-700 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {loading ? "Processing" : "Sign Up Page"}
        </h1>
        <form onSubmit={onSignUp}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={user.username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              disabled={buttonDisabled || loading}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
            <div className="mt-1 flex text-sm gap-1">
              <span className="inline-block">I already have an account.</span>
              <Link href="/login" className="inline-block text-sky-500">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
