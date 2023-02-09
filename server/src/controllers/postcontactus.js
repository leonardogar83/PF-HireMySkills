const contactUs = require("../models/contactus.js");
const nodemailer = require("nodemailer");
const { GMAIL_ADMIN, PASSWORD_ADMIN } = process.env;

const postContactUs = async (req, res) => {
  let { name, email, question, message } = req.body;

  try {
    await contactUs.create({
      name,
      email,
      question,
      message,
    });
    //creacion y configuracion del envio de mail
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: GMAIL_ADMIN, // generated ethereal user
        pass: PASSWORD_ADMIN , // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    //mensaje que se envia al mail
    let informacion = await transporter.sendMail({
      from: `"HIREMYSKILLS 👾⚒️" <${GMAIL_ADMIN}>`, // sender address
      to: GMAIL_ADMIN , // list of receivers
      subject: `" ${question} "`, // Subject line
      html: `${message}${email}`, // html body
    });
    res.send(informacion)
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = postContactUs;
