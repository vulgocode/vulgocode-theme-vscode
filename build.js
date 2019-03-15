 const fs = require('fs');
 const editorConfig = require('./src/editor.json');
 let { default  } = require('./src/syntax');

 fs.writeFileSync(
   './themes/teste.json',
   JSON.stringify(
     {
       ...editorConfig,
       ...default
     },
     '',
     2
   )
 )
 