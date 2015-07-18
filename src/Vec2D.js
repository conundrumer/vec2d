'use strict';

var Vector = require('./Vector.js')
  , Float64Vector = require('./Float64Vector.js')
  , Float32Vector = require('./Float32Vector.js')
  , ObjectVector = require('./ObjectVector.js');

module.exports = {
  ArrayVector: Vector,
  ObjectVector: ObjectVector,
  Float64Vector: Float64Vector,
  Float32Vector: Float32Vector

  // TODO: Add instance methods in the future
};
