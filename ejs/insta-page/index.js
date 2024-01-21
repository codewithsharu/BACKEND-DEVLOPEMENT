const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");

let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/notification", (req, res) => {
    res.render("notif.ejs");
});

app.get("/dice", (req, res) => {
    let rn = Math.floor(Math.random() * 6 + 1);
    res.render("dice.ejs", { num: rn });
});

app.get("/ig/:username", (req, res) => {
    const dataPath = path.join(__dirname, 'data.json');

    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data.json:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const instaData = JSON.parse(data);

        const username = req.params.username;

        if (instaData[username]) {
            const user = instaData[username];
            console.log(user);
            res.render("profile.ejs", { user });
        } else {
            res.status(404).send("User not found");
        }
    });
});
