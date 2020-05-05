const Header = () => {
    return (
        <div>
            <header>
                <h1 id="pageTitle">Neopixel Controller</h1>
                <p>Control the neopixel right here on the web!</p>
            </header>
        </div>
    )
};

const setup = () => {
    ReactDOM.render(
        <Header />, document.querySelector('#header')
    );
};

$(document).ready(function () {
    setup();
})