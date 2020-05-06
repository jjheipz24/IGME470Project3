'use strict';

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
        { className: 'power-buttons' },
        React.createElement(Button, { className: 'pwr', name: 'On', msg: 'A=101\\n' }),
        React.createElement(Button, { className: 'pwr', name: 'Off', msg: 'A=102\\n' })
    );
};

var ColorPickerGrid = function ColorPickerGrid() {
    return React.createElement(
        'div',
        { className: 'colors-container' },
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

var setup = function setup() {
    ReactDOM.render(React.createElement(Header, null), document.querySelector('#header'));

    ReactDOM.render(React.createElement(OnOffButtons, null), document.querySelector('#on-off'));

    ReactDOM.render(React.createElement(ColorPickerGrid, null), document.querySelector('#colors'));
};

$(document).ready(function () {
    setup();
});

// module.exports = {
//     getMsg: () => msg
// };
