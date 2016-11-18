'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = _redis2.default.createClient();

client.on('connect', function () {
  console.log('Redis connection established');
});

client.on('error', function (err) {
  console.log('Error with Redis connection:', err);
});

// uses redis SET command
var set = function set(key, value) {
  client.set(key, value, function (err, reply) {
    //console.log(`err: '${err}', reply: '${reply}'`);
    if (err) {
      console.log('Error: ' + err);
    }

    if (reply) {
      //console.log(`Reply: ${reply}`);
    }
  });
};

var get = function get(key, res) {

  client.get(key, function (err, reply) {
    //console.log(`err: '${err}', reply: '${reply}'`);

    if (err) {
      console.log('Error: ' + err);
      res.json({ error: 'Error' });
    } else if (reply) {
      //console.log(`Reply: ${reply}`); 
      res.json(JSON.parse(reply));
    }
  });
};

exports.default = {
  set: set,
  get: get
};