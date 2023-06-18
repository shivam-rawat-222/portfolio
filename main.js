const express = require("express");
const app = express();
const sql = require("mysql");
const nodemailer = require('nodemailer');

//creating connection with my database//
// var connection = sql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database : 'personal_portfolio'

// })
// connection.connect((err)=>{
//     if(err){
//         console.log(err);

//     }
//     else{
//         console.log(" DATABASE CONNECTED SUCCESFULLY");
//     }
// })
app.use(express.static("routes"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.post("/submit",(req,res)=>{
//  var name = req.body.name;
//  var gmail = req.body.gmail;
//  var number = req.body.no;
//  var message = req.body.message;
//  console.log(name);
//  var query = "insert into info values('"+ name +"','"+ gmail +"','"+ number +"','"+ message +"')"
//  connection.query(query,(err)=>{
//      console.log("DATA SUBMITTED ");

//  })
//sending the mail//
//  let Transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'rawatcoder@gmail.com',
//         pass: '12345!@#$%'
//     }
// });

// let mailDetails = {
//     from: 'rawatcoder@gmail.com',
//     to: gmail ,
//     subject: 'HELLO SIR ',
//     text: 'this message is send by shivam rawat ',
// };
// Transporter.sendMail(mailDetails , (err,info)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("sent successfully");
//     }
// })

// })


app.listen(2002, () => {
    console.log("the server is started on port no. 2002");
})