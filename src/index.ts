
require("dotenv").config();
import { createTransport } from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.PASS;
const host = process.env.HOST;

const transporter = createTransport({
    host: host,
    port: 587,
    secure: false,
    auth: {
      user: email,
      pass: password
    },
    tls: {
      rejectUnauthorized: false
    }
});

const mailOption = {
  from: email,
  to: "thoeunsopheara@gmail.com",
  subject: "Typescript Mailer",
  html: `
    <h1>This is typescript mail</h1>
    <img src="https://i.picsum.photos/id/158/536/354.jpg?hmac=Fypbuk8X0lxHTeT1DqNhpyF_Ns2cPZ_VVZapiHQ0bd4" />
  `,
  attachments: [
    {
      filename: 'LICENSE',
      path: './LICENSE'
    }
  ]
}

transporter.sendMail(mailOption, (error, info) => {
    if(error){
        console.log(error);
    }else{
      console.log(info);
    }
});
