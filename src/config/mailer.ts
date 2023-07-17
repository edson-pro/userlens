import nodemailer from "nodemailer";

// create reusable transporter object using the default SMTP transport
let mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ntwaliedson9@gmail.com", // generated ethereal user
    pass: "xrcqnlxgbptebxfv", // generated ethereal password
  },
});

export default mailer;
