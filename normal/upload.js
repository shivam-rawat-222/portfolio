
// let express = require ('express');
// let formidable = require ('formidable');
// const path = require("path");
// let app = express();
// const uploadFolder = path.join(__dirname + "/upload")



// app.get('/', ( req , res)=>{
//     res.sendFile( __dirname + '/upload.html');
// })
// app.post('/upload', (req , res)=>{
//   var form = new formidable.IncomingForm();
//   console.log(form);
//   form.multiples = true;
// form.maxFileSize = 50 * 1024 * 1024; 
// form.uploadDir = uploadFolder;
// console.log(form);
// form.parse(req ,(files , field)=>{
//   console.log(files);
//   console.log(field);
// })
//   // if (err){
//   //   console.log("there is an error");
//   // }
//   //   var form = new formidable.IncomingForm();
    
//   //   // form.parse(req);
    
//   //   form.on('fileBegin' , function(name , file){
//   //     // console.log(__dirname + '/upload');

//   //    file.path = __dirname + '/upload/' + file.name ;

//   //   })
//   //   form.on('file',(name,file)=>{
//   //     console.log("file uploaded")
//   //   })
//   //   res.send("uploaded");
      

    
// })
// // app.post("/upload",(req,res)=>{
// //   console.log(req.files);
// // })
// app.listen(2323 , ()=>{
//   console.log("the server is running thankyou");
// })

const express = require('express');
const fs = require('fs');
const path = require('path')
const formidable = require('formidable');
   
const app = express();

app.get("/" , (req,res)=>{
  res.sendFile(path.join(__dirname + "/upload.html"))
})
   
app.post('/', (req, res, next) => {
    
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = __dirname + "/upload/" + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
});
   
app.listen(3000, function(err){
    if(err) console.log(err)
    console.log('Server listening on Port 3000');
})})
