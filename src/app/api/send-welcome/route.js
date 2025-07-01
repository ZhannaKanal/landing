import nodemailer from "nodemailer";

export async function POST(req) {
  const { email } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, 
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome!",
      text: "Hi, welcome to our site",
    });

    return new Response(JSON.stringify({ message: "Email sent" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error sending email" }), { status: 500 });
  }
}
