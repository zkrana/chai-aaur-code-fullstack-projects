"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Profile() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users/loggeduser");
        setUserData(response.data.data._id);
      } catch (error: any) {
        console.error("Fetch user error:", error.message);
        toast.error("Failed to fetch user data.");
      }
    };

    fetchData();
  }, []);

  const LogOut = async (e: any) => {
    // Remove type annotation from LogOut function parameter
    e.preventDefault();
    try {
      const response = await axios.get("/api/users/logout");
      if (response.data.success) {
        toast.success("Logout success.");
        setTimeout(() => {
          router.push("/login");
        }, 1000); // Redirect after 1 second
      } else {
        toast.error("Logout failed.");
      }
    } catch (error: any) {
      console.error("Logout error:", error.message);
      toast.error("Logout failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Profile</h1>
        <div className="flex flex-col items-center">
          <img
            src="https://avatar.iran.liara.run/public/17"
            alt="User Avatar"
            className="w-32 h-32 rounded-full mb-4"
          />
          {userData && (
            <div>
              <h2 className="text-2xl text-gray-800 font-semibold mb-2">
                John Doe
              </h2>
              <p className="text-gray-600 mb-2">Awesome and id: </p>
              <Link className=" text-sky-400" href={`/profile/${userData}`}>
                See users
              </Link>
              <p className="text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          )}

          <button
            onClick={LogOut}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
