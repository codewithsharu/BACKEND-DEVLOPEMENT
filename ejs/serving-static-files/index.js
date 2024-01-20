const express = require('express');
const app = express();
const path = require('path');

let port = 9090;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

app.get('/', (req, res) => {
  res.render("start.ejs");
});
 