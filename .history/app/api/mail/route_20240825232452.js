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
    const {
      width,
      height,
      depth,
      quantity,
      unit,
      color,
      name,
      email,
      phone,
      message,
      slug,
      title,
      stock,
      images,
      printing,
      cardThickness,
      extraFinishes,
      lamination,
    } = await request.json();

    const imagesLinks = [];

    // console.log(images);

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
    console.log("r1", imagesLinks);

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
      to: "tayyabafzal174@gmail.com",
      subject: `New Inquiry from ${name} to the PrintProPackaging.`,
      text: `
                ${title && "Product Title: " + title}
                ${slug && `Product Link: ${process.env.NEXT_BASE_URL}/product/${slug}`}
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Width: ${width}
                Height: ${height}
                Depth: ${depth}
                Quantity: ${quantity}
                Unit: ${unit}
                ${printing && "Printing: " + printing}
                ${color && "Color: " + color}
                ${message && "Message: " + message}
                ${stock && "Stock: " + stock}
                ${cardThickness && "Card Thickness: " + cardThickness}
                ${extraFinishes && "Extra Finishes: " + extraFinishes}
                ${lamination && "Lamination: " + lamination}
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
