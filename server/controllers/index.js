const app = require('../app.js');

//Renders the main page on the client
const main = (req, res) => {
  res.render('main');
};

//Gets the ajax request from the client with the message to send
//Calls the changeNeopixel function on the server
//Sends the message
const sendCodes = (request, response) => {
  let req = request;
  let res = response;

  //console.log(req.body.message);
  let message = req.body.message;
  app.changeNeopixel(message);
  res.status(200).json({
    msg: 'OK'
  });
}

module.exports.main = main;
module.exports.sendCodes = sendCodes;