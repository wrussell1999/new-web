const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

let transporter = nodemailer.createTransport({
  host: functions.config().smtp.host,
  port: parseInt(functions.config().smtp.port),
  secure: true,
  auth: {
    user: functions.config().smtp.user,
    pass: functions.config().smtp.pass,
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const email = req.body.email;
    const subject = req.body.subject;
    const message = `${req.body.message}\n\n--\nThis e-mail was sent from a contact form on Hack Kosice (https://hackkosice.com)`;
    console.log('Received a message from %s, with subject %s, saying: %s', email, subject, message);
    const msg = {
      from: 'Hack Kosice <contact@hackkosice.com>',
      to: 'Hack Kosice <contact@hackkosice.com>',
      reply_to: email,
      subject: subject,
      text: message,
    }

    // returning result
    return transporter.sendMail(msg, (error, result) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      return res.send("Message Sent");
    });
  });
});
