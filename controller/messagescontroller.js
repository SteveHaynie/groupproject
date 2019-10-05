const nodemailer = require("nodemailer");

const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

async function sendMail(req, res) {
 try {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: EMAIL_USERNAME,
          pass: EMAIL_PASSWORD
        }
      });
    
      let info = await transporter.sendMail({
        from: EMAIL_USERNAME,
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.message,
      });
    
      res.send('success');
 } catch (error) {
     console.error(error)
 }
}


module.exports = {
    sendMail
}