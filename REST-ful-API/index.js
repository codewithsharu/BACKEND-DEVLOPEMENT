const express = require('express');
const app = express();
const path = require('path');

//this line is to help express to understand the data from request 
app.use(express.urlencoded({extended:true}));

let port = 8989;

app.listen(port,()=>{
    console.log("app listining at "+port);
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
    res.send("yeahh !! working great ");
});



