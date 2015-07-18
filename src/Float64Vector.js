'use strict';

var util = require('util')
  , Vector = require('./Vector.js');

function Float64Vector(x, y) {
  if (this instanceof Float64Vector === false) {
    return new Float64Vector(x, y);
  }

  this._axes = new Float64Array(2);
  this._axes[0] = x;
  this._axes[1] = y;
}
util.inherits(Float64Vector, Vector);

Float64Vector.prototype.ctor = Float64Vector;

module.exports = Float64Vector;
