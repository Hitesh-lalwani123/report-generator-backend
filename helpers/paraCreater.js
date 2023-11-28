const officegen = require("officegen");
const docx = officegen("docx");
const fs = require("fs");

const paraCreater = (data) => {
  let p = docx.createP();
  p.addText(data);
  const out = fs.createWriteStream("result12.docx");
  docx.generate(out);
};

module.exports = paraCreater;
