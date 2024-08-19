import nodeMailer from 'nodemailer';

export async function POST(request) {
    const { width, height, depth, quantity, unit, color, name, email, phone, message, slug, title } = await request.json();

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

    const mailOptions = {
        from: email,
        to: 'tayyabafzal174@gmail.com',
        subject: `New Inquiry from ${name} to the PrintProPackaging.`,
        text: ` 
            ${title ? 'Product Title: ' + title : ''}
            ${slug ? 'Product Link: http://localhost:3000/product/' + slug : ''}
            Width: ${width}
            Height: ${height}
            Depth: ${depth}
            Quantity: ${quantity}
            Unit: ${unit}
            Color: ${color}
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
