const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/assets/partenaires');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const files = [
  { url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', name: 'netflix.svg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Canal%2B_logo.svg', name: 'canal.svg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Arte_logo.svg', name: 'arte.svg' }
];

files.forEach(file => {
  https.get(file.url, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  }, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
      https.get(res.headers.location, (redirectRes) => {
        const filePath = fs.createWriteStream(path.join(dir, file.name));
        redirectRes.pipe(filePath);
      });
    } else {
      const filePath = fs.createWriteStream(path.join(dir, file.name));
      res.pipe(filePath);
    }
  });
});
