// FUNCTION IN JavaScript

function multiply(a,b) {
    var result = a*b;
    console.log(result);
    return result;
}
var multiplied = multiply(3,4);

// regular function, called expicitly by name:
function multiply() {
    var result = 3 * 4;
    console.log("3 multiplied by 4 is", result);
}
multiply();

// anonymous function stored in variable as a function
// invoked by calling the variable as a function:

var divided = function() {
    var result = 3 / 4;
    console.log("3 devided by 4 is", result);
}
divided();

// immideatly invoked function expression
// runs as soon as the browser finds it:

(function() {
    var result = 12 / 0.75;
    console.log("12 divided by 0.75 is", result);
});

// BUILD A BASIC FUNCTION
// ADD ARGUMENTS TO THE FUNCTION

function findBiggestFunction(a,b) {
    var result;
    a>b ? result = ["firstFraction", a] : result = ["seconFraction", b];
    return result;
    
}

var fristFraction = 3/4;
var seconFraction = 5/7;

var fractionResult = findBiggestFunction(fristFraction,seconFraction);
findBiggestFunction(7/16,13/25);
findBiggestFunction(1/2,3/4);
console.log("first fraction result", fristFraction);
console.log("secound fraction result", seconFraction);
console.log("fraction" + fractionResult[0] + "width a value of" + fractionResult[1] + " is the biggest!" );


// ANONYMOUS FUNCTION




var theBiggest = function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}

console.log(theBiggest(5/7,18/25));
console.log(theBiggest);

// IMMEDIATELY INVOKED FUNCTIONAL EXPRESSION

var firstFraction = 7/9;
var secoundFraction = 13/13;

var theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(firstFraction, secoundFraction)

console.log(theBiggest);

// VARIABLE SCOPE

// global scope

var factor = 7;
function multiply() {
    var num = 6;  //local scope
    var result = factor * num; 
}
var getResult = multiply();

///////////////////////////////

function findBiggestFunction(a,b) {
    console.log("Fraction a: ", firstFraction);
    console.log("Fraction b: ", secoundFraction);

    var result; // local scope

    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}

var firstFraction = 7/16; // global scope
var seconFraction = 13/25;

var fractionResult = findBiggestFunction(fristFraction,seconFraction);
console.log("fraction" + fractionResult[0] + "width a value of" + fractionResult[1] + " is the biggest!" );

