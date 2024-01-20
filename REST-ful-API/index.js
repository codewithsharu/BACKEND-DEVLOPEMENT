const express = require('express');
const app = express();
const path = require('path');

//express ki direct data ardam kadhu so midleware vadi encode chestam recieve ina data ni 
app.use(express.urlencoded({ extended: true }));

let port = 8989;

let posts = [
    { username: 'boolsui', content: 'burrapadu ra babu burra poyindii' },
    { username: 'tirnimla', content: 'kg nimm kayala 100 rupees konte konu ledante mingey' },
    { username: 'krinji', content: 'chootu bolthe call me chotuu' }
];

app.listen(port, () => {
    console.log("app listening at " + port);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.send("yeahh !! working great ");
});

app.get("/posts", (req, res) => {
    res.render('posts.ejs', { posts });
});
