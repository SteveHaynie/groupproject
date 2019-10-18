const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');

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
        text: `Here is your stuff ${req.body.email} and pass is ${req.body.password}. You can log in here - ZAC DON'T FORGET THIS`,
      });

      

    
      res.send('success');
 } catch (error) {
     console.error(error)
 }
}

async function formSubmission(req, res) {
  try {
    const db = req.app.get('db');
    const managerId = await db.getManagerId([req.body.unitId])
    const managerEmail = await db.getManagerEmail([managerId[0].manager]);

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
         to: managerEmail[0].email,
         cc: req.body.tenantEmail,
         subject: req.body.subject,
         text: req.body.message,
       });
 
       
 
     
       res.send('success');
  } catch (error) {
      console.error(error)
  }
 }
 

async function resetCredentials(req, res) {
try {
  const db = req.app.get('db')
  const randomWord = 'test'
  const newPassword = bcrypt.hashSync(randomWord, 10)
  const emailList = await db.findEmail([req.body.email, newPassword])
  console.log(emailList)
  res.send(emailList, 200)


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
        text: `your password is ${randomWord}. log in here - http://localhost:3000/login`,
      });
    
      res.send('success');
 } catch (error) {
     console.error(error)
 }
}



module.exports = {
    sendMail,
  resetCredentials,
  formSubmission
  }