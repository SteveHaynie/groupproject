const nodemailer = require("nodemailer");

const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

async function tenantMail(req, res) {
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
           to: req.body.managerEmail,
           cc: req.body.tenantEmail,
           subject: req.body.subject,
           text: req.body.message,
         });
       
         res.send('success');
    } catch (error) {
        console.error(error)
    }
   }

   async function getManagerEmail (req,res) {
       try {
           const db = req.app.get('db');
           const managerId = await db.getManagerId([req.params.unitId])
           const managerEmail = await db.getManagerEmail([managerId[0].managerS]);
           res.send(managerEmail)
       } catch (error) {
           console.error(error)
       }
   }

   async function getTenantEmail (req,res) {
       try {
           const db = req.app.get('db');
           const tenantEmail = await db.getTenantEmail([req.params.unitId]);
           res.send(tenantEmail)
       } catch (error) {
           console.error(error)
       }
   }
   
   
   

   
   
   module.exports = {
    tenantMail, getManagerEmail, getTenantEmail
     }