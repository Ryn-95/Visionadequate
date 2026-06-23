const fs = require('fs');
const https = require('https');
const path = require('path');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', reject);
  });
};

const run = async () => {
  await download('https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png', 'public/assets/partenaires/netflix.png');
  await download('https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Canal%2B_logo.svg/1024px-Canal%2B_logo.svg.png', 'public/assets/partenaires/canal.png');
  await download('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Arte_logo.svg/1024px-Arte_logo.svg.png', 'public/assets/partenaires/arte.png');
  await download('https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/ColorsxStudios_logo.svg/1024px-ColorsxStudios_logo.svg.png', 'public/assets/partenaires/colors.png');
  
  console.log('Downloaded all images successfully');
};

run();
