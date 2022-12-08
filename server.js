const express = require("express");
const { get } = require("http");
const app = express();
const nodemailer = require("nodemailer");

app.use(express.json())

transporter = nodemailer.createTransport({
    service: 'Gmail',
    //host: 'myhost',
    port: 465,
    secure: true,
    auth: {
      user: 'falgunagohel@gmail.com',
      pass: 'joulpshllydsuony'
    }
  });

  app.post("/sendmail", (req, res) => {
    const mailData = req.body;
    console.log(mailData);
    transporter.sendMail(mailData, async function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  })


  app.listen(8080);
  