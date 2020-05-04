const SerialPort = require('serialport');
const config = require('../config.js');

const sp = new SerialPort("COM3", {
    baudrate: config.baudRate,
}, false);

console.log('Starting up serial host...');

const message = 'DATA GOES HERE';

function write() {
    sp.open((err) => {
        console.log(`Writing serial data: ${message}`);
        sp.write(message, (err, res) => {
            if (err) {
                console.log(err);
            }
            sp.close();
        });
    });
}

setTimeout(write, 1000); // wait 1s for everything to initialize correctly
setInterval(write, 5000); // write data every 5s

module.exports = {
    write: write
};