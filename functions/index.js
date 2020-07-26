const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: functions.config().contact.user,
    pass: functions.config().contact.pass,
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    const email = req.body.email;
    const name = req.body.name;
    const subject = req.body.subject;
    const message = req.body.message;
    console.log('Received an email from %s (%s), with subject %s, saying: %', name, email, subject, message);
    const mailOptions = {
          from: email,
          to: functions.config().contact.user,
          subject: subject,
          text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };
    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Message Sent");
    });
  });
});
