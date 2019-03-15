const fs = require("fs");
const editorConfig = require("./src/editor.json");
let { normal } = require("./src/syntax");

fs.writeFileSync(
  "./themes/teste.json",
  JSON.stringify(
    {
      ...editorConfig,
      ...normal
    },
    "",
    2
  )
);
