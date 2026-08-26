const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.csv': 'text/csv',
};

http.createServer((req, res) => {
  const cleanPath = req.url.split('?')[0];
  const routeMap = {
    '/tentang': '/tentang.html',
    '/semua-trayek': '/semua-trayek.html',
  };

  let resolvedPath = cleanPath;
  if (routeMap[cleanPath]) {
    resolvedPath = routeMap[cleanPath];
  } else if (cleanPath.endsWith('/')) {
    const withoutSlash = cleanPath.slice(0, -1);
    if (routeMap[withoutSlash]) {
      resolvedPath = routeMap[withoutSlash];
    }
  }

  let filePath = path.join(__dirname, resolvedPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
  }
}).listen(PORT, () => console.log(`AngkotMedan → http://localhost:${PORT}`));
