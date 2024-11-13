import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  // Check if request method is POST
  if (request.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  // Handle JSON data parsing
  let data;
  const contentType = request.headers.get("content-type");

  if (contentType === "application/json") {
    data = await request.json();
  } else if (
    contentType === "multipart/form-data" ||
    contentType === "application/x-www-form-urlencoded"
  ) {
    const formData = await request.formData();
    data = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      phoneno: formData.get("phoneno"),
      message: formData.get("message"),
    };
  } else {
    return NextResponse.json(
      { message: "Unsupported Content-Type" },
      { status: 415 }
    );
  }

  // Extract data
  const name = `${data.firstname} ${data.lastname}`;
  const email = data.email;
  const phoneno = data.phoneno;
  const message = data.message;

  console.log(+" " + password);

  // Configure the email transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: myEmail,
      pass: password,
    },
  });

  try {
    // Send the email
    const mail = await transporter.sendMail({
      from: myEmail,
      to: myEmail,
      replyTo: email,
      subject: `Contact Us By ${email}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone No: ${phoneno}</p>
        <p>Message: ${message}</p>
      `,
    });

    console.log("Message sent: %s", mail.messageId);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE" },
      { status: 500 }
    );
  }
}
