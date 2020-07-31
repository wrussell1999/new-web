const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");
const cors = require("cors")({ origin: true });

sgMail.setApiKey(functions.config().contact.sendgrid.api.key);

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    console.log('Received an email from %s, with subject %s, saying: %s', email, subject, message);
    const msg = {
        to: 'contact@hackkosice.com',
        from: 'contact@hackkosice.com',
        reply_to: email,
        subject: subject,
        text: message,
    }

    // returning result
    return sgMail.send(msg, (error, result) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        return res.send("Message Sent");
    });
  });
});
