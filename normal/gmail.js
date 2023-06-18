var formidable = require('formidable');
const nodemailer = require('nodemailer');
var fs = require('fs');

let Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rawatcoder@gmail.com',
        pass: '12345!@#$%'
    }
});
  
let mailDetails = {
    from: 'rawatcoder@gmail.com',
    to: 'shivambuddy222@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail',
};
Transporter.sendMail(mailDetails , (err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("sent successfully");
    }
})
  