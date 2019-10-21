const express = require('express');

const morgan = require('morgan');
const path = require('path');
const routes = require('../routes/index.js');
//const cors = require('cors')

var config = require('../config/env')


initialize = () => {

  const { host, port } = config;
  const app = express();

  app.disable('x-powered-by');

  //Settings
  app.set('views', path.join(__dirname, 'views'));

  //Middelewares
  // Combines logging info from request and response
  app.use(morgan('tiny'));
  app.use(express.json());

  //Routes
  app.use('/src', routes);

  // Starting
  app.listen(port, host, () => {
    console.log(`Server on port ${host}:${port}`);
  });

}

module.exports.initialize = initialize;
