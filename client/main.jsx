let msg;
const Header = () => {
    return (
        <div>
            <header>
                <h1 id="pageTitle">Neopixel Controller</h1>
                <p>Control the neopixel right here on the web!</p>
            </header>
        </div>
    )
}


const handleInput = (e) => {
    msg = "A=304\n"
}

// const BrightnessButton = () => {

//     return (
//         <div>
//             <button type="submit" onClick={handleInput}>Click</button>
//         </div>
//     )

// };

const setup = () => {
    ReactDOM.render(
        <Header />, document.querySelector('#header')
    );

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