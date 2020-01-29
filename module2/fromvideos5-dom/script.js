// JavaScript and the DOM
// Changing DOM elements

// DOM: The document object model

// Target elements in the DOM width qureySelector methodes
 /*

// DOM PROPERTIES
document.body; // The body element
document.title; // The document title
document.URL; // The document URL

// DOM METHODS

// get the element with a specified ID:
document.getElementById("some.ID");

// Get all the element with a class name as array
document.getElementsByClassName("classname");

// Get all elements with a specified HTML tag as array:
document.getElementsByTagName("HTML tag");

// Get the fist element matching specified selector(s);
document.querySelector(".main-nav a");

// Get all elements matching spedified selectior(s);
document.querySelectorAll(".post-content p");

//  ACCESS AND CHANGE ELEMENT

document.querySelector(".main-title").innerHTML;
"Welcome to Moonwalk Manor"

document.querySelector("main-title").outerHTML;
"<h2 class="main-title">Welcome to Moonwalk Manor</h2>"

document.querySelector(".main-title").innerHTML = "All your headings are belong to us!";
// this can be change to whatever you want

document.querySelector("#showcase").id = "slideshow";
// to change the ID

// ACCESS AND CHANGE CLASSES

document.querySelector(".masthead").classList;
document.querySelector(".masthead").classList.ass("new-class");

// to remove
document.querySelector(".masthead").classList.remove("clear");

// https://developer.mozilla.org/en-US/docs/Web/API/Elements#Properties

// ACCESS AND CHANGE ATTRIBUTES

const CTAELEMENT = document.querySelector(".cta a");

if (CTAELEMENT.hasAttribute("target")) {
    console.log(CTAELEMENT.getAttribute("target"));
} else {
    CTAELEMENT.setAttribute("target", "_blanc");

}

console.log(CTAELEMENT.attributes);

// ADD DOM ELEMENTS


// 1 Create the element
// 2 Create the text node that goes inside the element
// 3 Add the tect node to the element
// 4 Add the element to the DOM tree

.createElement(); // create an element
.createTextNode(); // create text node
.appendChilde(); // place one child node inside another



const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");

var captionText = document.createTextNode(altText);

captionElement.appendChilde(captionText);

console.log(captionElement);

FEATURED.appendChilde(captionElement);

THEIMAGE.setAttribute("alt", "");

/////////////////////////////////
// this will not work on every browser, the one on the top will do

captionElement.append(altText);
FEATURED.append(captionElement);

// APPLY INLINE CSS TO AN ELEMENT


// add any CSS property to any elemnt via JavaScript using style attribute
document.querySelector(".cta a").style.color = "green";
document.querySelector(".cta a").style.backgroundColor = "blue";
document.querySelector(".cta a").style.cssText = "padding: 1em; color: blue; background-color: white;";

.hasAttribute("style"); // does the element have style
.getAttribute("style"); // get the inline styles
.setAttribute("style", "color:red"); // add CSS property
.removeAttribute("style"); // remove inline styles

// inline CSS overrides whatever CSS is applied to an element.
// In most (but not all) cases, the best practice to create 
// CSS rules and use JavaScript to manage these classes to apply 
// the rules to the element

*/