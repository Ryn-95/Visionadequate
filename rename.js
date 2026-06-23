const fs = require('fs');
const path = require('path');

function cleanName(name) {
  return name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9.-]/g, '').toLowerCase();
}

function processDir(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDir(fullPath);
      const newName = cleanName(item);
      if (newName !== item) {
        fs.renameSync(fullPath, path.join(dir, newName));
      }
    } else {
      const ext = path.extname(item);
      const name = path.basename(item, ext);
      const newName = cleanName(name) + ext.toLowerCase();
      if (newName !== item) {
        fs.renameSync(fullPath, path.join(dir, newName));
      }
    }
  });
}

processDir(path.join(__dirname, 'public/assets'));
console.log('Renaming done');