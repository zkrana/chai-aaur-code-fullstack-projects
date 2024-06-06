"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactPage = () => {
  // Handle button disabled state
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Handle loading state
  const [loading, setLoading] = useState(false);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Call conatct fucntion
  const sendContact = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("api/contact", contact);
      console.log("Form successfully submitted.", response);
      toast.success("Form successfully submitted.");

      setContact({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      toast.error("Failed to submit the form. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  // Form validation
  useEffect(() => {
    if (
      contact.name.length > 0 &&
      contact.email.length > 0 &&
      contact.message.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [contact]);

  return (
    <section className="bg-gray-100 text-slate-700 py-16 px-4">
      <div className="container mx-auto max-w-screen-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            We'd love to hear from you! Please fill out the form below to get in
            touch.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  value={contact.name}
                  onChange={(e) => {
                    setContact({ ...contact, name: e.target.value });
                  }}
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={contact.email}
                  onChange={(e) => {
                    setContact({ ...contact, email: e.target.value });
                  }}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={contact.subject}
                onChange={(e) => {
                  setContact({ ...contact, subject: e.target.value });
                }}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={contact.message}
                onChange={(e) => {
                  setContact({ ...contact, message: e.target.value });
                }}
                className="w-full min-h-40 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                onClick={sendContact}
                disabled={buttonDisabled || loading}
                className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default ContactPage;
