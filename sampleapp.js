const { ok } = require('assert');
const http = require('http');
const { messageBrokerListen } = require('./simple-promise');

const host = '127.0.0.1';
const port = '8990';

const sampleJSON = {
    message: '',
    correlationId: '5859c2da-1385-4f4a-bd05-ebb8e803e889'
};

const server = http.createServer(async (request, response) => {
    response.statusCode = 200;
    response.setHeader('X-CORRELATION-ID', '5859c2da-1385-4f4a-bd05-ebb8e803e889');
    response.setHeader('Content-Type', 'application/json');
    sampleJSON.message = await callMessageBroker();
    response.end(JSON.stringify(sampleJSON));
});

server.listen(port, host, () => {
    console.log(`The server has started running, at http://${host}:${port}`);
});

async function callMessageBroker() {
    let message = '';
    await messageBrokerListen().then((ok) => {
        message = ok;
    }).catch((err) => {
        message = err;
    });
    return message;
}