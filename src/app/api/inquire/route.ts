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

    // Send email via Resend if configured
    if (process.env.RESEND_API_KEY) {
      const recipientEmail =
        process.env.NOTIFICATION_EMAIL || "rental@50hubbardlane.com";

      console.log("Sending email to:", recipientEmail);

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Southampton Retreat <onboarding@resend.dev>",
          to: [recipientEmail],
          subject: `New Rental Inquiry from ${name} – ${dates || "Dates TBD"}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1b2a4a;">New Rental Inquiry</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #1b2a4a;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #1b2a4a;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #1b2a4a;">Phone</td><td style="padding: 8px 0;">${phone || "Not provided"}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #1b2a4a;">Dates</td><td style="padding: 8px 0;">${dates || "Not specified"}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #1b2a4a;">Guests</td><td style="padding: 8px 0;">${guests || "Not specified"}</td></tr>
              </table>
              <h3 style="color: #1b2a4a; margin-top: 20px;">Message</h3>
              <p style="background: #f5f0eb; padding: 16px; border-left: 3px solid #c5a572;">${message || "No message"}</p>
              <hr style="border: none; border-top: 1px solid #e8dfd6; margin: 24px 0;" />
              <p style="color: #999; font-size: 12px;">
                Submitted at ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET via Southampton Retreat
              </p>
            </div>
          `,
        }),
      });

      const resendData = await resendResponse.json();

      if (!resendResponse.ok) {
        console.error("Resend API error:", resendData);
        return NextResponse.json(
          { error: "Failed to send email", details: resendData },
          { status: 500 }
        );
      }

      console.log("Email sent successfully:", resendData);
    } else {
      console.warn("RESEND_API_KEY not configured — email not sent");
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
