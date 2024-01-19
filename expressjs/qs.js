const express = require('express');
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/:username/:pass", (req, res) => {
    let {username, pass} = req.params;
    res.send(`id  ${username} <br> pass ${pass}`);
});

app.get("/search", (req, res) => {
    let {q} = req.query;
    res.send(`you were searched for ${q}`);
});
