
// app.use((req,res)=>{

//     console.log("request recieved");

//     let c = "<h1>shareen</h1>"

//     res.send(c);
// })


const express = require('express');
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you contacted root path");
});

app.get("/apple", (req, res) => {
    res.send("APPLE");
});
