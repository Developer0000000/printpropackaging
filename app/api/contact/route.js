import nodeMailer from 'nodemailer';

export async function POST(request) {
    const { name, email, query, message } = await request.json();

    // Create a Nodemailer transporter
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });

    // Set up email options
    const mailOptions = {
        from: email,
        to: process.env.SMTP_EMAIL,
        subject: `New Contact Form Submission from ${name} to PrintPro Packaging`,
        text: `Name: ${name}\nEmail: ${email}\nQuery: ${query}\nMessage: ${message}`,
    };

    // Send the email
     try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }

}
