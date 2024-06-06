import { connect } from "@/app/config/dbConfig";
import Contact from "@/models/Contact";
import { NextResponse, NextRequest } from "next/server";

// Ensure that the database is connected before handling the request
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, subject, message } = reqBody;
    console.log(reqBody);

    // Create new contact form
    const contactData = new Contact({
      name,
      email,
      subject,
      message,
    });

    // Save new contact
    const newContact = await contactData.save();

    // Return new contact success
    return NextResponse.json(
      {
        message: "Form submitted successfully.",
        success: true,
        contact: newContact,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error saving contact form:", error); // Log the error
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
