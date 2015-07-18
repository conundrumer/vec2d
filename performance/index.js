var Vec2D = require('../src/Vec2D.js'),
  Table = require('cli-table'),
  Suite = require('./Suite');

var VECTOR_COUNT = 100000,
  TEST_PASSES = 5;

console.log('Tests are averaged from %d passes/runs on a set of %d vectors. Please wait...', TEST_PASSES, VECTOR_COUNT);

function stats(item) {
  console.log('"%s", %dms', item.name, item.time);
}

function totalTime(items) {
  console.log('%dms', items.reduce(function(sum, item) { return sum + item.time; }, 0));
}

global.gc();
var av = new Suite(Vec2D.ArrayVector, VECTOR_COUNT, TEST_PASSES).run();
console.log('\nArrayVector');
totalTime(av);

global.gc();
var ov = new Suite(Vec2D.ObjectVector, VECTOR_COUNT, TEST_PASSES).run();
console.log('\nObjectVector');
totalTime(ov);

global.gc();
var fv = new Suite(Vec2D.Float32Vector, VECTOR_COUNT, TEST_PASSES).run();
console.log('\nFloat32Vector');
totalTime(fv);

global.gc();
var fv2 = new Suite(Vec2D.Float64Vector, VECTOR_COUNT, TEST_PASSES).run();
console.log('\nFloat64Vector');
totalTime(fv2);

var table = new Table({ head: ['time in ms', 'ArrayVector', 'ObjectVector', 'Float32Vector', 'Float64Vector'] });

for (var i = 0; i < av.length; i++) {
  var row = {};
  row[av[i].name] = [av[i].time, ov[i].time, fv[i].time, fv2[i].time];
  table.push(row);
}

console.log(table.toString());
