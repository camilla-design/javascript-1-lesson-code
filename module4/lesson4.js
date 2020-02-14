/*
// Question 1
// Loop through the array below (with a for loop or a forEach loop) and log each property's age value. Log "Unknown" if it is missing.

const resultsContainer = document.querySelector(".results");

const cars = [
    {
        type: "BMW",
        age: 4,
        beenInAccident: false
    },
    {
        type: "Toyota",
        beenInAccident: true
    },
    {
        type: "Ford",
        beenInAccident: true
    }
];

for(let i = 0; i < cars.length; i++) {
    if(cars[i].age) {
        console.log(cars[i].age);
    } else {
        console.log("Unknown");
    }
}

// Question 2

//Create a function that receives one argument. When you call the function pass the elephants array above into the function.

//Inside the function, loop through the array and create an img tag for each object, with src and alt attributes created from the properties in each object.

//Return the created HTML from the function.

//Assign the return value of the function to a variable and console log it.

//It will look similar to this (though it will be one long string).

const elephants = [
    { image: "https://elephant-api.herokuapp.com/pictures/001.jpg", note: "Given to a Carolingian emperor." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "From the Mysore Dasara procession." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "Known for her tightrope walking act." }
];

function elephantsFunction(elephantsArgument) {
    let html = "";

    for(let i = 0; i < elephantsArgument.length; i++) {
        html += `<img src="${elephantsArgument.image}" 
                    alt="${elephantsArgument[i].note}"`;
    }
    return html;
}

const elephantsValue = elephantsFunction(elephants);
console.log(elephantsValue);


// Question 3
//Write a function with code similar to question 2 but provide the following default values for missing properties:

//src - https://via.placeholder.com/250
//alt - "Elephant picture"
//Wrap all the img tags in a div tag.
// with forEach loop

const elephants = [
    { image: "https://elephant-api.herokuapp.com/pictures/001.jpg", note: null},
    { note: "From the Mysore Dasara procession." },
    { image: null, note: "Known for her tightrope walking act." }
];

function elephantsFunction(images) {
    let html = "<div>";

    images.forEach(img => {
        let imgUrl = img.image ? img.image : "https://via.placeholder.com/250";
        // default alt value
        let noteValue = img.note ? img.note : "Elephant picture";

        html += `<img src="${imgUrl}" alt="${noteValue}">`;
    });

    html += "</div>";
    return html;
}

const elephantsValue = elephantsFunction(elephants);
console.log(elephantsValue);
*/