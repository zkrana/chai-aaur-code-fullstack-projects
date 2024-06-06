import nodemailer from "nodemailer";
import User from "@/models/User";
import bcrypt from "bcryptjs";

interface EmailOptions {
  email: string;
  emailtype: "VERIFY" | "RESET";
  userId: string | number;
}

export const sendEmail = async ({ email, emailtype, userId }: EmailOptions) => {
  try {
    // Create hashed token
    const hashPass = await bcrypt.hash(userId.toString(), 10);

    const updateData = {
      [emailtype === "VERIFY" ? "verifyToken" : "forgotPasswordToken"]:
        hashPass,
      [emailtype === "VERIFY"
        ? "verifyTokenExpiry"
        : "forgotPasswordTokenExpiry"]: Date.now() + 3600000,
    };

    await User.findByIdAndUpdate(userId, updateData);

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: "zkranao@gmail.com",
      to: email,
      subject:
        emailtype === "VERIFY" ? "Verify your email" : "Reset your Password",
      html: `<p> Click <a href='${
        process.env.DOMAIN
      }/verifyemail?token=${hashPass}'>here</a> to ${
        emailtype === "VERIFY" ? "Verify your email" : "Reset your Password"
      } or copy and paste the link below in your browser. <br>
      ${process.env.DOMAIN}/verifyemail?token=${hashPass}
      </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    console.error("Error sending email:", error);
    throw new Error(error.message);
  }
};
