import React from "react";

export default function Profile() {
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
          <h2 className="text-2xl text-gray-800 font-semibold mb-2">
            John Doe
          </h2>
          <p className="text-gray-600 mb-2">john.doe@example.com</p>
          <p className="text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
