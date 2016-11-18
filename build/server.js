'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressFaviconShortCircuit = require('express-favicon-short-circuit');

var _expressFaviconShortCircuit2 = _interopRequireDefault(_expressFaviconShortCircuit);

var _redisCache = require('./data/redisCache');

var _redisCache2 = _interopRequireDefault(_redisCache);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
//import redisSeed from './data/redisSeed';


app.set('port', process.env.PORT || 3005);
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_expressFaviconShortCircuit2.default);

app.use('/movie', _routes2.default.movie);

// create postgres schema

// save movies to postgres

app.listen(app.get('port'), function () {
  console.log('Server listening on port ' + app.get('port'));
});