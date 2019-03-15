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
  "./themes/Vulgocode-Color-Theme.json",
  JSON.stringify(
    {
      ...editorConfig,
      ...bold
    },
    "",
    2
  )
);

fs.writeFileSync(
  "./themes/OneDark-Pro-vivid.json",
  JSON.stringify(
    {
      ...editorConfig,
      ...vivid
    },
    "",
    2
  )
);
