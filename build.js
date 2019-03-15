const fs = require("fs");
const editorConfig = require("./src/editor.json");
const { normal, bold } = require("./src/syntax");

fs.writeFileSync(
  "./themes/Vulgocode-Color-Theme.json",
  JSON.stringify(
    {
      ...editorConfig,
      ...normal
    },
    "",
    2
  )
);

fs.writeFileSync(
  "./themes/Vulgocode-Color-Theme-bold.json",
  JSON.stringify(
    {
      ...editorConfig,
      ...bold
    },
    "",
    2
  )
);
