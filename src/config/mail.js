const nodemailer=require('nodemailer');
// require("dotenv").config();

module.exports=nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "bb3db545a75d13",
      pass:  "7267b5b9dbe40e"
    },
  });