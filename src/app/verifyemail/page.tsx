"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const VerifyEmail = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const urlToken = new URLSearchParams(window.location.search).get("token");
    if (urlToken) {
      setToken(urlToken);
    } else {
      setError(true);
      setErrorMessage("No token provided.");
    }
  }, []);

  useEffect(() => {
    if (token) {
      verifyEmail();
    }
  }, [token]);

  const verifyEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      setErrorMessage(error.response?.data?.message || "An error occurred.");
      console.error("Error verifying email:", error.response?.data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold">Verify Email</h1>
      {token && (
        <h2 className="p-2 bg-orange-500 text-black rounded mt-2">
          Token: {token}
        </h2>
      )}
      {verified && (
        <div className="mt-4 text-center">
          <h2 className="text-xl text-green-600 mb-6">
            Email verified successfully.
          </h2>
          <Link
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            href="/login"
          >
            Login
          </Link>
        </div>
      )}
      {error && (
        <div className="mt-4">
          <h2 className="text-xl text-red-600">Verification Failed</h2>
          <p className="text-red-500">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
