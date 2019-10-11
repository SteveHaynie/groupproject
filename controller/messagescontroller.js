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
        to: req.body.email,
        subject: req.body.subject,
        text: `Here is your stuff ${req.body.email} and pass is ${req.body.password}`,
      });
    
      res.send('success');
 } catch (error) {
     console.error(error)
 }
}


module.exports = {
    sendMail
}