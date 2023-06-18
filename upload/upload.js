const express = require("express");
const path = require("path");
const formidable = require("formidable");

const app = express();

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname +"/upload.html"))
})
app.post("/uploadfile" , (req,res)=>{
    var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files) {
                var oldpath = files.file.path;
                var newpath = 'C:\MRU SEM 3\files' + files.file.name;
                fs.rename(oldpath, newpath, function (err) {
                    if (err) throw err;
                   console.log('File Uploaded');
                })
                console.log('fields = ', fields);
})})


app.listen(2002, ()=>{
console.log("the server is started on port no. 2002");
})