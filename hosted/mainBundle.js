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
var OnOff = function OnOff() {
    return React.createElement(
        'div',
        { id: 'power' },
        React.createElement(Radio, { className: 'pwr-btn', name: 'pwr', value: 'On', msg: 'A=101\\n' }),
        React.createElement(Radio, { className: 'pwr-btn', name: 'pwr', value: 'Off', msg: 'A=102\\n' })
    );
};

var BrightnessBar = function BrightnessBar() {
    return React.createElement(
        'div',
        { id: 'brightness-container' },
        React.createElement(
            'h3',
            null,
            'Brightness'
        ),
        React.createElement(
            'div',
            { id: 'b-bar' },
            React.createElement(Button, { className: 'bright-btn', name: '20%', msg: 'B=8\\n' }),
            React.createElement(Button, { className: 'bright-btn', name: '40%', msg: 'B=16\\n' }),
            React.createElement(Button, { className: 'bright-btn', name: '60%', msg: 'B=32\\n' }),
            React.createElement(Button, { className: 'bright-btn', name: '80%', msg: 'B=64\\n' }),
            React.createElement(Button, { className: 'bright-btn', name: '100%', msg: 'B=100\\n' })
        )
    );
};

var AnimationGrid = function AnimationGrid() {
    return React.createElement(
        'div',
        { id: 'animation-container' },
        React.createElement(
            'h3',
            null,
            'Animations'
        ),
        React.createElement(
            'div',
            { id: 'animation-grid' },
            React.createElement(Button, { className: 'animation-btn', name: 'Blink', msg: 'A=103\\n' }),
            React.createElement(Button, { className: 'animation-btn', name: 'Sparkle', msg: 'A=105' }),
            React.createElement(Button, { className: 'animation-btn', name: 'Strobe', msg: 'A=107' }),
            React.createElement(Button, { className: 'animation-btn', name: 'Cycle', msg: 'A=151' }),
            React.createElement(Button, { className: 'animation-btn', name: 'Shift R', msg: 'A=201' }),
            React.createElement(Button, { className: 'animation-btn', name: 'Shift L', msg: 'A=202' }),
            React.createElement(Button, { className: 'animation-btn', name: 'Smooth Shift R', msg: 'A=211' }),
            React.createElement(Button, { className: 'animation-btn', name: 'Smooth Shift L', msg: 'A=212' }),
            React.createElement(Button, { className: 'animation-btn', name: 'Bounce', msg: 'A=203' }),
            React.createElement(Button, { className: 'animation-btn', name: 'Smooth Bounce', msg: 'A=213' }),
            React.createElement(Button, { className: 'animation-btn', name: 'Comet', msg: 'A=221' }),
            React.createElement(Button, { className: 'animation-btn', name: 'Glow', msg: 'A=304' }),
            React.createElement(Button, { className: 'animation-btn', name: 'Bars', msg: 'A=241' }),
            React.createElement(Button, { className: 'animation-btn', name: 'Gradient', msg: 'A=242' }),
            React.createElement(Button, { className: 'animation-btn', name: 'Larson Scanner', msg: 'A=251' }),
            React.createElement(Button, { className: 'animation-btn', name: 'Bubbles', msg: 'A=503' })
        )
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
            { id: 'color-grid' },
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

var PaletteBar = function PaletteBar() {
    return React.createElement(
        'div',
        { id: 'palette-container' },
        React.createElement(
            'h3',
            null,
            'Palette'
        ),
        React.createElement(
            'div',
            { id: 'p-bar' },
            React.createElement(Radio, { className: 'palette-btn', name: 'palette', value: 'None', msg: 'P=0\\n' }),
            React.createElement(Radio, { className: 'palette-btn', name: 'palette', value: 'RGB', msg: 'P=1\\n' }),
            React.createElement(Radio, { className: 'palette-btn', name: 'palette', value: 'Rainbow', msg: 'P=2\\n' }),
            React.createElement(Radio, { className: 'palette-btn', name: 'palette', value: 'Party', msg: 'P=3\\n' }),
            React.createElement(Radio, { className: 'palette-btn', name: 'palette', value: 'Heat', msg: 'P=4\\n' }),
            React.createElement(Radio, { className: 'palette-btn', name: 'palette', value: 'Fire', msg: 'P=5\\n' }),
            React.createElement(Radio, { className: 'palette-btn', name: 'palette', value: 'Cool', msg: 'P=6\\n' })
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

//Creates a radio button
var Radio = function Radio(props) {
    var value = props.value;
    var msg = props.msg;

    return React.createElement(
        'div',
        null,
        React.createElement('input', { type: 'radio', className: props.className, id: props.id, name: props.name, value: value, onChange: function onChange() {
                return sendMessage(msg);
            } }),
        React.createElement(
            'label',
            null,
            value
        )
    );
};

var setup = function setup() {
    ReactDOM.render(React.createElement(Header, null), document.querySelector('#header'));

    ReactDOM.render(React.createElement(OnOff, null), document.querySelector('#on-off'));

    ReactDOM.render(React.createElement(BrightnessBar, null), document.querySelector('#brightness'));

    ReactDOM.render(React.createElement(AnimationGrid, null), document.querySelector('#animation'));
    ReactDOM.render(React.createElement(ColorPickerGrid, null), document.querySelector('#colors'));

    ReactDOM.render(React.createElement(PaletteBar, null), document.querySelector('#palette'));
};

$(document).ready(function () {
    setup();
});

// module.exports = {
//     getMsg: () => msg
// };
