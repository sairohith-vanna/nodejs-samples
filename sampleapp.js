const http = require('http');

const host = '127.0.0.1';
const port = '8990';

const sampleJSON = {
    message: 'Message brokerage complete. JSON transformed & submitted',
    correlationId: '5859c2da-1385-4f4a-bd05-ebb8e803e889'
};

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('X-CORRELATION-ID', '5859c2da-1385-4f4a-bd05-ebb8e803e889');
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(sampleJSON));
});

server.listen(port, host, () => {
    console.log(`The server has started running, at http://${host}:${port}`);
});