'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _redisCache = require('../data/redisCache');

var _redisCache2 = _interopRequireDefault(_redisCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/now_playing', function (req, res) {
  _redisCache2.default.get('now_playing', res);
});

router.get('/upcoming', function (req, res) {
  _redisCache2.default.get('upcoming', res);
});

exports.default = router;