const controllers = require('./.controllers');

const router = (app) => {
  app.get('/main', controllers.main);
  app.get('/', controllers.main);
};

module.exports = router;
