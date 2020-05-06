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
const OnOffButtons = () => {
    return (
        <div className="power-buttons">
            <Button className="pwr" name="On" msg="A=101\n" />
            <Button className="pwr" name="Off" msg="A=102\n" />
        </div>
    )
}

const ColorPickerGrid = () => {
    return (
        <div className='colors-container'>
            <h3>Colors</h3>
            <div className="color-grid">
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


const setup = () => {
    ReactDOM.render(
        <Header />, document.querySelector('#header')
    );

    ReactDOM.render(
        <OnOffButtons />, document.querySelector('#on-off')
    );

    ReactDOM.render(
        <ColorPickerGrid />, document.querySelector('#colors')
    );

};

$(document).ready(function () {
    setup();
});

// module.exports = {
//     getMsg: () => msg
// };