const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static(__dirname + "/style.css"));
app.use(express.static(__dirname + "/main.js"));
app.use(express.static(__dirname + "/br.js"));

app.get("/", function (req, res) {
    fs.createReadStream("intel.html").pipe(res);
});

app.listen(80, "0.0.0.0");