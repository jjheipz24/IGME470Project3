'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var msg = void 0;
//Sends post requests to server with the messages to send to Arduino
var sendAjax = function sendAjax(data) {
    console.log(data);
    $.ajax({
        url: '/sendCode',
        type: 'POST',
        data: data,
        dataType: 'json',
        success: function success(data) {
            console.log(data.msg);
        }
    });
};

var sendMessage = function sendMessage(msg) {
    //e.preventDefault();

    sendAjax({ message: msg });
};
var Header = function Header() {
    return React.createElement(
        'header',
        null,
        React.createElement(
            'h1',
            { id: 'pageTitle' },
            'Neopixel Controller'
        ),
        React.createElement(
            'p',
            null,
            'Control the neopixel right here on the web!'
        )
    );
};

//Power buttons
var OnOffButtons = function OnOffButtons() {
    return React.createElement(
        'div',
        { id: 'power-buttons' },
        React.createElement(Button, { className: 'pwr', name: 'On', msg: 'A=101\\n' }),
        React.createElement(Button, { className: 'pwr', name: 'Off', msg: 'A=102\\n' })
    );
};

var BrightnessBar = function BrightnessBar() {
    return React.createElement(
        'div',
        { id: 'b-bar' },
        React.createElement(Button, { className: 'bright', name: '20%', msg: 'B=8\\n' }),
        React.createElement(Button, { className: 'bright', name: '40%', msg: 'B=16\\n' }),
        React.createElement(Button, { className: 'bright', name: '60%', msg: 'B=32\\n' }),
        React.createElement(Button, { className: 'bright', name: '80%', msg: 'B=64\\n' }),
        React.createElement(Button, { className: 'bright', name: '100%', msg: 'B=100\\n' })
    );
};

var ColorPickerGrid = function ColorPickerGrid() {
    return React.createElement(
        'div',
        { id: 'colors-container' },
        React.createElement(
            'h3',
            null,
            'Colors'
        ),
        React.createElement(
            'div',
            { className: 'color-grid' },
            React.createElement(Button, { className: 'color-btn', id: 'red-btn', msg: 'C=EF4050' }),
            React.createElement(Button, { className: 'color-btn', id: 'orange-btn', msg: 'C=F78545' }),
            React.createElement(Button, { className: 'color-btn', id: 'yellow-btn', msg: 'C=FFD700' }),
            React.createElement(Button, { className: 'color-btn', id: 'green-btn', msg: 'C=8AC926' }),
            React.createElement(Button, { className: 'color-btn', id: 'blue-btn', msg: 'C=1982C4' }),
            React.createElement(Button, { className: 'color-btn', id: 'pink-btn', msg: 'C=DE00ED' }),
            React.createElement(Button, { className: 'color-btn', id: 'purple-btn', msg: 'C=371263' }),
            React.createElement(Button, { className: 'color-btn', id: 'white-btn', msg: 'C=FFFFFF' })
        )
    );
};

//Creates a button
var Button = function Button(props) {
    var name = props.name;
    var msg = props.msg;
    //let msg = props.msg;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { type: 'button', className: props.className, id: props.id, onClick: function onClick() {
                    return sendMessage(msg);
                } },
            name
        )
    );
};

var Radio = function Radio(props) {
    var _React$createElement;

    var name = props.name;
    var msg = props.msg;

    return React.createElement(
        'div',
        null,
        React.createElement('input', (_React$createElement = { type: 'radio', className: props.className, id: props.id, value: props.value }, _defineProperty(_React$createElement, 'value', name), _defineProperty(_React$createElement, 'onChange', function onChange() {
            return sendMessage(msg);
        }), _React$createElement)),
        ' ',
        name
    );
};

var setup = function setup() {
    ReactDOM.render(React.createElement(Header, null), document.querySelector('#header'));

    ReactDOM.render(React.createElement(OnOffButtons, null), document.querySelector('#on-off'));

    ReactDOM.render(React.createElement(BrightnessBar, null), document.querySelector('#brightness'));

    ReactDOM.render(React.createElement(ColorPickerGrid, null), document.querySelector('#colors'));
};

$(document).ready(function () {
    setup();
});

// module.exports = {
//     getMsg: () => msg
// };
