import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, dates, guests, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Log the inquiry (visible in Vercel function logs)
    console.log("New rental inquiry:", {
      name,
      email,
      phone,
      dates,
      guests,
      message,
      timestamp: new Date().toISOString(),
    });

    // If Resend API key is configured, send email notification
    if (process.env.RESEND_API_KEY) {
      const recipientEmail =
        process.env.NOTIFICATION_EMAIL || "rental@50hubbardlane.com";

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Southampton Retreat <onboarding@resend.dev>",
          to: recipientEmail,
          subject: `New Rental Inquiry from ${name} – ${dates || "Dates TBD"}`,
          html: `
            <h2>New Rental Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Preferred Dates:</strong> ${dates || "Not specified"}</p>
            <p><strong>Guests:</strong> ${guests || "Not specified"}</p>
            <p><strong>Message:</strong></p>
            <p>${message || "No message"}</p>
            <hr />
            <p style="color: #999; font-size: 12px;">
              Submitted at ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET
            </p>
          `,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}
