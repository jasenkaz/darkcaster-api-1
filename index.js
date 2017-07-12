const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

//middleware imports
const logger = require('./middleware/logger');
const notFound = require('./middleware/404');
const cors = require('cors');
//routers
const weatherRouter = require('./routers/weather.router');

//middleware use
server.use(logger);
server.use(weatherRouter);
server.use(cors());
//dummy route for testing
server.get('/', (request, response) => {
  response.send('it works!');
});
server.use(notFound);
server.listen(port, () => {
  console.log('Now listening on port: ', port);
});
