import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Keep this for now
      to: "developerabdullah.boss@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        New message from ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact API Error:", error); // <-- add this
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
