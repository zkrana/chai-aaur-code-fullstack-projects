import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name."],
      index: false,
      unique: false,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      index: false,
      unique: false,
    },
    subject: {
      type: String,
      required: [false, "Please provide a subject"],
    },
    message: {
      type: String,
      required: [true, "Please type your message."],
    },
  },
  {
    timestamps: true,
  }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
