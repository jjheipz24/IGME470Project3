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

const sendMessage = (msg) => {
    //e.preventDefault();

    sendAjax({ message: msg });

}
const Header = () => {
    return (
        <header>
            <h1 id="pageTitle">Neopixel Controller</h1>
            <p>Control the neopixel right here on the web!</p>
        </header>
    )
}

//Power buttons
const OnOff = () => {
    return (
        <div id="power">
            <Radio className="pwr-btn" name="pwr" value="On" msg="A=101\n" />
            <Radio className="pwr-btn" name="pwr" value="Off" msg="A=102\n" />
        </div>
    )
}

const BrightnessBar = () => {
    return (
        <div id="brightness-container">
            <h3>Brightness</h3>
            <div id="b-bar">
                <Button className="bright-btn" name="20%" msg="B=8\n" />
                <Button className="bright-btn" name="40%" msg="B=16\n" />
                <Button className="bright-btn" name="60%" msg="B=32\n" />
                <Button className="bright-btn" name="80%" msg="B=64\n" />
                <Button className="bright-btn" name="100%" msg="B=100\n" />
            </div>
        </div>
    )
}

const AnimationGrid = () => {
    return (
        <div id="animation-container">
            <h3>Animations</h3>
            <div id="animation-grid">
                <Button className="animation-btn" name="Blink" msg="A=103\n" />
                <Button className="animation-btn" name="Sparkle" msg="A=105" />
                <Button className="animation-btn" name="Strobe" msg="A=107" />
                <Button className="animation-btn" name="Cycle" msg="A=151" />

                <Button className="animation-btn" name="Shift R" msg="A=201" />
                <Button className="animation-btn" name="Shift L" msg="A=202" />
                <Button className="animation-btn" name="Smooth Shift R" msg="A=211" />
                <Button className="animation-btn" name="Smooth Shift L" msg="A=212" />

                <Button className="animation-btn" name="Bounce" msg="A=203" />
                <Button className="animation-btn" name="Smooth Bounce" msg="A=213" />
                <Button className="animation-btn" name="Comet" msg="A=221" />
                <Button className="animation-btn" name="Glow" msg="A=304" />

                <Button className="animation-btn" name="Bars" msg="A=241" />
                <Button className="animation-btn" name="Gradient" msg="A=242" />
                <Button className="animation-btn" name="Larson Scanner" msg="A=251" />
                <Button className="animation-btn" name="Bubbles" msg="A=503" />
            </div>
        </div>
    )
}

const ColorPickerGrid = () => {
    return (
        <div id='colors-container'>
            <h3>Colors</h3>
            <div id="color-grid">
                <Button className="color-btn" id="red-btn" msg="C=EF4050" />
                <Button className="color-btn" id="orange-btn" msg="C=F78545" />
                <Button className="color-btn" id="yellow-btn" msg="C=FFD700" />
                <Button className="color-btn" id="green-btn" msg="C=8AC926" />
                <Button className="color-btn" id="blue-btn" msg="C=1982C4" />
                <Button className="color-btn" id="pink-btn" msg="C=DE00ED" />
                <Button className="color-btn" id="purple-btn" msg="C=371263" />
                <Button className="color-btn" id="white-btn" msg="C=FFFFFF" />

            </div>
        </div>
    )
}

const PaletteBar = () => {
    return (
        <div id="palette-container">
            <h3>Palette</h3>
            <div id="p-bar">
                <Radio className="palette-btn" name="palette" value="None" msg="P=0\n" />
                <Radio className="palette-btn" name="palette" value="RGB" msg="P=1\n" />
                <Radio className="palette-btn" name="palette" value="Rainbow" msg="P=2\n" />
                <Radio className="palette-btn" name="palette" value="Party" msg="P=3\n" />
                <Radio className="palette-btn" name="palette" value="Heat" msg="P=4\n" />
                <Radio className="palette-btn" name="palette" value="Fire" msg="P=5\n" />
                <Radio className="palette-btn" name="palette" value="Cool" msg="P=6\n" />
            </div>
        </div>
    )
}

//Creates a button
const Button = (props) => {
    let name = props.name;
    let msg = props.msg;
    //let msg = props.msg;
    return (
        <div>
            <button type="button" className={props.className} id={props.id} onClick={() => sendMessage(msg)}>{name}</button>
        </div>
    )
};

//Creates a radio button
const Radio = (props) => {
    let value = props.value;
    let msg = props.msg;

    return (
        <div>
            <input type="radio" className={props.className} id={props.id} name={props.name} value={value} onChange={() => sendMessage(msg)} />
            <label>{value}</label>
        </div>
    )
}


const setup = () => {
    ReactDOM.render(
        <Header />, document.querySelector('#header')
    );

    ReactDOM.render(
        <OnOff />, document.querySelector('#on-off')
    );

    ReactDOM.render(
        <BrightnessBar />, document.querySelector('#brightness')
    );

    ReactDOM.render(
        <AnimationGrid />, document.querySelector('#animation')
    );
    ReactDOM.render(
        <ColorPickerGrid />, document.querySelector('#colors')
    );

    ReactDOM.render(
        <PaletteBar />, document.querySelector('#palette')
    );

};

$(document).ready(function () {
    setup();
});

// module.exports = {
//     getMsg: () => msg
// };