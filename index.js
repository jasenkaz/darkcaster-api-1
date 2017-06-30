const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

//middleware imports
const logger = require('./middleware/logger');
const notFound = require('./middleware/404');
const errorHandler = require('./middleware/500');
//routers
const weatherRouter = require('./routers/weather.router');

//middleware use
server.use(logger);
server.use(weatherRouter);
//dummy route for testing
server.get('/', (request, response) => {
  response.send('it works!');
});
server.use(notFound);
server.use(errorHandler);
server.listen(port, () => {
  console.log('Now listening on port: ', port);
});
