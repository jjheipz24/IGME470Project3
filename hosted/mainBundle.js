"use strict";

var msg = void 0;
var Header = function Header() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "header",
            null,
            React.createElement(
                "h1",
                { id: "pageTitle" },
                "Neopixel Controller"
            ),
            React.createElement(
                "p",
                null,
                "Control the neopixel right here on the web!"
            )
        )
    );
};

var handleInput = function handleInput(e) {
    msg = "A=304\n";
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
