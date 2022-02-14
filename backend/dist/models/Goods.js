'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoodSchema = new _mongoose.Schema({
    title: String,
    price: String
}, {
    timestamps: true
});

var GoodModel = _mongoose2.default.model('Good', GoodSchema);

exports.default = GoodModel;