"use strict";

const fs = require("fs");
var path = require("path");

const editorConfig = require("./src/editor.json");
const { normal, bold } = require("./src/syntax");

const inputPath = path.join(
  "node_modules",
  "github-markdown-css/github-markdown.css"
);

const fullPath = path.join(__dirname, inputPath);

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

function updateGithubMarkdownCss(input) {
  return (
    `/* Generated from '${inputPath}' */\n` +
    input.replace(/\.markdown-body/g, ".vscode-body")
  );
}

const input = fs.readFileSync(fullPath, "utf8");

fs.writeFileSync("themes/github-markdown.css", updateGithubMarkdownCss(input));

fs.copyFileSync("./src/base.css", "./themes/base.css");
