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

// ES2015: LET AND CONST

// CONST
// can`t be changed once defined

const MYCONSTANT = 5;
console.log(MYCONSTANT);

// LET
// block scope variable 
// smaller scope than var
/*
function logScope() {
    let localVar = 2;

    if (localVar) {
        var localVar = "I`m different";
        console.log("nested localVar: ", localVar);
    }

    console.log("logScope localVar: ", localVar);
}
logScope();

// MAKE SENSE OF OBJECTS */

var course = new Object();

/* one way of doing this

course.title = "JavaScript Essential Training";
course.student = "Camilla Reppen";
course.level = 1;
course.published = true;
course.views = 0;
*/

var course = {
    title: "JavaScript Essential Training",
    student: "Camilla Reppen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course.views);
console.log(course.views);

// OBJECT CONSTRUCTORS

function Course(title, student, level, published, views) {
    this.title = title;
    this.student = student;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
        return ++this.views;
    };
}

var course01 = new Course("JavaScript Essential Training", "Camilla Reppen", 1, true, 0);
var course02 = new Course("Name of a course", "Name of a student", 1, true, 123456);


console.log(course01);
console.log(course02);

// array

var courses = [ 
    new Course("JavaScript Essential Training", "Camilla Reppen", 1, true, 0),
    new Course("Name of a course", "Name of a student", 1, true, 123456)

];

console.log(courses);
console.log(courses[0].student);

// SIDEBAR: DOT AND BRACKET NOTATION

/*

course.title                  course["title"]
                   WP:Image

course.wp:image (error)        course["WP:image"]

*/


// CLOSURES

function doSomeMath() {
    var a = 5;
    var b = 4;
    var sum = a + b;

    return sum;
}

var theResult = doSomeMath();

console.log("the result: ", theResult);

/////////////////////////////////////////

function doSomeMath() {
    var a = 5;
    var b = 4;
    
    function multiply() {
        var result = a*b;
        return result;
    }

    return multiply;
}

var theResult = doSomeMath();

console.log("the result: ", theResult());

/////////////////////////////////////////

function giveMeEms(pixels) {
    var baseValue = 16;

    function doTheMath() {
        return pixels/baseValue;
    }

    return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(23);

console.log("small size: ", smallSize() );
console.log("medium size: ", mediumSize() );
console.log("large size: ", largeSize() );
console.log("xlarge size: ", xlargeSize() );







