const msgBrkrProcessComplete = false;

function messageBrokerListen() {
    const processComplete = new Promise((resolve, reject) => {
        if (msgBrkrProcessComplete) {
            const transformationComplete = 'Message brokerage complete. JSON transformed & submitted';
            resolve(transformationComplete);
        } else {
            const transformationPending = 'Transformation is still in the queue';
            reject(transformationPending);
        }
    });
    return processComplete;
}

module.exports = { messageBrokerListen };