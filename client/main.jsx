let msg;
//Sends post requests to server with the messages to send to Arduino
const sendAjax = (data) => {
    console.log(data);
    $.ajax({
        url: '/sendCode',
        type: 'POST',
        data: data,
        dataType: 'json',
        success: function (data) {
            console.log(data.msg);
        },
    });
}

const sendMessage = (e) => {
    e.preventDefault();

    sendAjax({ message: "A=203\n" });

}
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

const AnimationButton = () => {
    return (
        <Button name="Pixel Bounce" />
    )
}

const Button = (props) => {
    let name = props.name;
    //let msg = props.msg;
    return (
        <div>
            <button onClick={sendMessage}>{name}</button>
        </div>
    )
};

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

    ReactDOM.render(
        <AnimationButton />, document.querySelector('#btn')
    )

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