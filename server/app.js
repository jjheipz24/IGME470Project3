const path = require('path');
const express = require('express');
const compression = require('compression');
//const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
// const {
//     getMsg
// } = require('../client/main.jsx');

const SerialPort = require('serialport');
const config = require('../config.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

//pull in routes
const router = require('./router.js');

const app = express();
app.use('/assets', express.static(path.resolve(`${__dirname}/../hosted/`)));
app.use(compression());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.engine('handlebars', expressHandlebars({
    defaultLayout: '',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);
app.disable('x-powered-by');
app.use(cookieParser());

router(app);

app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Listening on port ${port}`);
});

//Connects to the serial port for the Arduino
const sp = new SerialPort('COM3', {
    baudrate: config.baudRate,
}, false);

console.log('Starting up serial host...');

//Writes to the serial monitor of the arduino
function writeSerial(message) {
    sp.open((err) => {
        //console.log(`Writing serial data: ${message}`);
        if (message != null) {
            sp.write(message, (err, res) => {
                if (err) {
                    console.log(err);
                }
                //sp.close();
            });

        }

    });
}

//Gets called to initiate changes to neopixel
function changeNeopixel(message) {
    writeSerial(message);
    setInterval(writeSerial, 2000);
}

//setTimeout(on, 1000); // wait 1s for everything to initialize correctly
//setInterval(changeNeo, 2000); // write data every X seconds

module.exports.changeNeopixel = changeNeopixel;
module.exports.writeSerial = writeSerial;