const express = require('express');
const app = express();
const path = require("path");

let port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/",(req,res)=>{

    res.render("home.ejs");
});

app.get("/notification",(req,res)=>{

    res.render("notif.ejs");
});


app.get("/dice",(req,res)=>{

    let rn = Math.floor(Math.random()*6+1);
    res.render("dice.ejs",{num :rn});
});
app.get("/ig/:username", (req, res) => {
    const followers = ["shareen", "mala", "kala", "shala"];
    let { username } = req.params;
    res.render("instagram.ejs", { name: username, followers: followers });
});
