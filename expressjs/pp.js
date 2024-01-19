

const express = require('express');
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/:username/:pass", (req, res) => {

    let {username,pass} = req.params;

    res.send(`you contacted root path  ${username}`);
});

app.get("/username", (req, res) => {
    res.send(`  id : ${username}  pass : ${pass}`);
});
