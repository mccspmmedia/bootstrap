const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
