const SerialPort = require('serialport');
const config = require('../config.js');

const sp = new SerialPort('COM3', {
    baudrate: config.baudRate,
}, false);

console.log('Starting up serial host...');

const message = "A=304\n";

function on() {
    sp.open((err) => {
        //console.log(`Writing serial data: ${message}`);
        sp.write(message, (err, res) => {
            if (err) {
                console.log(err);
            }
            //sp.close();
        });
    });
}

function off(){
    sp.open((err) => {
        //console.log(`Writing serial data: ${message}`);
        sp.write("0\n", (err, res) => {
            if (err) {
                console.log(err);
            }
            //sp.close();
        });
    });
}

//setTimeout(on, 1000); // wait 1s for everything to initialize correctly
setInterval(on, 2000); // write data every X seconds
//setInterval(off, 2000); // write data every X seconds

module.exports = {
    on: on,
    off: off
};