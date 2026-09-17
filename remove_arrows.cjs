const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/SASISIVAPRAKASH M/OneDrive/Desktop/TeamUnknowns_Mentorship/src/components/modules';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

const regex = /[ \t]*\{\/\* Next Arrow.*?\*\/\}[ \t]*\n[ \t]*<div[^>]*>[\s\S]*?<\/a>\s*<\/div>\s*\n?/g;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (regex.test(content)) {
    const newContent = content.replace(regex, '');
    fs.writeFileSync(filePath, newContent);
    console.log(`Removed Next Topic buttons from ${file}`);
  }
});
