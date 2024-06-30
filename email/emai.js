import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default function sendMail(data) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  const html = `
     <h1>New User Registered for the plan - ${data.plan}</h1>
     <h4>User Name - ${data.name}</h4>
     <h4>Email - ${data.email}</h4>
     <h4>Phone Number - ${data.phoneNumber}</h4>
  `

  let mailOptions = {
    from: process.env.EMAIL,
    to: "nirushetty582@gmail.com",
    subject: "New User Registered ----NO FRESHERS",
    html : html
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
