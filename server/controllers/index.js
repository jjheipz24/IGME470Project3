const app = require('../app.js');

const main = (req, res) => {
  res.render('main');
};

const sendCodes = (request, response) => {
  let req = request;
  let res = response;

  //console.log(req.body.message);
  let message = req.body.message;
  app.changeInterval(message);
  res.status(200).json({
    msg: 'OK'
  });
}

module.exports.main = main;
module.exports.sendCodes = sendCodes;