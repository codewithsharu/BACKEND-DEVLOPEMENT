const express = require('express');
const app = express();
const path = require('path');
const {v4:xid} = require('uuid');
//express ki direct data ardam kadhu so midleware vadi encode chestam recieve ina data ni 
app.use(express.urlencoded({ extended: true }));

let port = 8989;

let posts = [
    { id: xid() , username: 'tirnimla', content: 'kg nimm kayala 100 rupees konte konu ledante mingey' },
    { id: xid() , username: 'krinji', content: 'chootu bolthe call me chotuu' },
    { id: xid() , username: 'boolsui', content: 'burrapadu ra babu burra poyindii' },
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


app.get("/posts/new", (req, res) => {
    res.render('new.ejs');
});


app.get("/posts/:id", (req, res) => {
    
    let {id}=req.params;
    let post = posts.find((p)=> id==p.id);

    console.log(post);

    res.render('show.ejs',{post});

});

app.post("/posts", (req, res) => {
    let {username , content} = req.body;
    posts.push({username , content});
    res.redirect("/posts");
});