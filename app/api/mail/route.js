import nodeMailer from "nodemailer";
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    const { width, height, length, qty1, qty2, qty3, unit, color, interiorColor, exteriorColor, name, email, phone, message, slug, title, printSide, images, finishing, material, addOns: { spotUV, emboss, foil, insert, windowPatching } } = await request.json();


    const imagesLinks = [];

    if (images) {
      let newImages = [];
      if (typeof images === "string") {
        newImages.push(images);
      } else {
        newImages = images;
      }

      for (let i = 0; i < newImages.length; i++) {
        const result = await cloudinary.v2.uploader.upload(newImages[i], {
          folder: "PrintProPackaging",
        });

        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
    }
    // console.log(imagesLinks);

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
                ${title && "Product Title: " + title}
                ${slug && `Product Link: ${process.env.NEXT_BASE_URL}product/${slug}`}
                ${name && "Name: " + name}
                ${email && "Email: " + email}
                ${phone && "Phone: " + phone}
                ${width && "Width: " + width}
                ${height && "Height: " + height}
                ${length && "Length: " + length}
                ${qty1 && "Quantity1: " + qty1}
                ${qty2 && "Quantity2: " + qty1}
                ${qty3 && "Quantity3: " + qty1}
                ${unit && "Unit: " + unit}
                ${printSide && "Print Side: " + printSide}
                ${color && "Color: " + color}
                ${interiorColor && "Interior Color: " + interiorColor}
                ${exteriorColor && "Exterior Color: " + exteriorColor}
                ${finishing && "Finishing: " + finishing}
                ${material && "Material: " + material}
                Spot UV: ${spotUV}
                Emboss: ${emboss}
                Foil: ${foil}
                Insert: ${insert}
                Window Patching: ${windowPatching}
                ${message && "Message: " + message}
                ${imagesLinks.length >= 1 && `Images: ${imagesLinks.map((image) => image.url).join(", ")}`}
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
