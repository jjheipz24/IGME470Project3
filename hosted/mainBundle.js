'use strict';

var msg = void 0;
//handles requests
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

var sendMessage = function sendMessage(e) {
    e.preventDefault();

    sendAjax({ message: "A=203\n" });
};
var Header = function Header() {
    return React.createElement(
        'div',
        null,
        React.createElement(
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
        )
    );
};

var AnimationButton = function AnimationButton() {
    return React.createElement(Button, { name: 'Pixel Bounce' });
};

var Button = function Button(props) {
    var name = props.name;
    //let msg = props.msg;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: sendMessage },
            name
        )
    );
};

// const BrightnessButton = () => {

//     return (
//         <div>
//             <button type="submit" onClick={handleInput}>Click</button>
//         </div>
//     )

// };

var setup = function setup() {
    ReactDOM.render(React.createElement(Header, null), document.querySelector('#header'));

    ReactDOM.render(React.createElement(AnimationButton, null), document.querySelector('#btn'));

    // ReactDOM.render(
    //     <BrightnessButton />, document.querySelector('#btn')
    // );
};

$(document).ready(function () {
    setup();
});

// module.exports = {
//     getMsg: () => msg
// };
