import nodeMailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message, quantity } = await request.json();

    const transporter = nodeMailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.SMTP_EMAIL,
      subject: `New Inquiry from ${name} to the PrintProPackaging.`,
      text: `
                Instant Quote:
                ${name && "Name: " + name}
                ${email && "Email: " + email}
                ${phone && "Phone: " + phone}
                ${quantity && "Quantity: " + quantity}
                ${message && "Message: " + message}
            `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
