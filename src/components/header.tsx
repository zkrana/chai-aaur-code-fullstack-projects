"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "./navbar";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users/loggeduser");
        setUserData(response.data.data); // Set user data if user is logged in
      } catch (error: any) {
        console.error("Fetch user error:", error.message);
        // Handle error or set user data to null if user is not logged in
        setUserData(null);
      }
    };

    fetchData();
  }, []);

  const handleSignOut = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      if (response.data.success) {
        // Clear user data from state and redirect to login page
        setUserData(null);
        toast.success("Logout Success.");
        router.push("/login");
      } else {
        // Handle sign-out failure
        console.error("Sign out failed");
        toast.error("Logout Failed.");
      }
    } catch (error: any) {
      console.error("Sign out error:", error.message);
      // Handle sign-out error
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className=" sm:w-1/3 w-1/2 sm:text-2xl text-base font-bold">
          <Link href="/">Dynamic App</Link>
        </div>
        <div className="sm:w-2/3 w-1/2 text-end">
          <Navbar userData={userData} handleSignOut={handleSignOut} />
        </div>
      </div>
    </header>
  );
};

export default Header;
