const express = require("express");
const app = express();

const officegen = require("officegen");
const docx = officegen("docx");
const fs = require("fs");

app.use(express.json());
app.use(require("cors")());

app.use("/", require("./routes/dataRoute"));

app.get("/", (req, res) => {
  res.send("Api working");
});


app.listen(5000, () => {
  console.log("server listening on http://localhost:5000");
});
