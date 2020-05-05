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

const sp = new SerialPort('COM3', {
    baudrate: config.baudRate,
}, false);

console.log('Starting up serial host...');

let message = "A=304\n";
//let message = getMsg();

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

function off() {
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