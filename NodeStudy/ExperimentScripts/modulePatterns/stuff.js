// another way
//module.exports.counter = function(arr){
var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

//another way
//module.exports.adder = function(a,b){
var adder = function(a,b){
    return `The sum of the 2 numbers is ${a + b}`;
};

//another way
//module.exports.pi = 3.142;
var pi = 3.142;


/*
// Exports each by adding properties way to make it available
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
*/

//another way to add instead of the one above since module.exports is just an empty object
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}
