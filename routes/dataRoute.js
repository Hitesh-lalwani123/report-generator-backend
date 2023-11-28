const express = require('express');
const router = express.Router();
const officegen = require("officegen");
const docx = officegen("docx");
const fs = require("fs");
const paraCreater = require('../helpers/paraCreater')
// post method

router.post("/data", (req, res) => {
    let data = req.body.data;
    paraCreater(data);
  
    res.send("Document generated succesfully");
  });


module.exports = router;