
 function loadGames(event) {
     const buttonId = event.target.id;
     console.log(buttonId);

    let arrayToLoopThrough = [];

    if(buttonId === "action") { // IF BUTTON CLICKED WAS ACTION
        arrayToLoopThrough = actionGames; // show action games
    } else if(buttonId === "shooter") { // else if button eas clicked was shooter
        arrayToLoopThrough = shooterGames; // show shooter games
    } else if(buttonId === "rpg") { // if else buttons cliked eas RPG
        arrayToLoopThrough = rpgGames;
    }

    const container = document.querySelector(".container");
    let newHTML = "";
    
    for (let i = 0; i < arrayToLoopThrough.length; i++) {
        //const NAME = "<h4>" + actionGames[i].name + "</h4>" //ES5
        //const NAME = `<h4> ${actionGames[i].name} </h4>`; //ES6
        if (arrayToLoopThrough[i].rating) {
            ratingValue = actionGames[i].rating;
        } else {
            ratingValue = "Not rated";
        }
    
        const genres = arrayToLoopThrough[i].genres;
        const genresHTML = makeGenres(genres);
    
        const platforms = arrayToLoopThrough[i].platforms;
        const platformsHTML = makePlatforms(platforms);
    
        const details = `<div class="card">
                            <div class="image" style="background-image: url(${arrayToLoopThrough[i].background_image});"></div>
                            <div class="details">
                                <h4 class="name">${arrayToLoopThrough[i].name}</h4>
                                <div class="rating">${ratingValue}</div>
                                ${genresHTML}
                                <div class="platforms">${platformsHTML}</div>
                            </div>
                        </div>`;
    
        newHTML += details;
    }
    container.innerHTML = newHTML;
}
    
    
    function makeGenres(genreArray) {
    
        let genreHTML = "";
    
        for (let i = 0; i < genreArray.length; i++) {
            genreHTML += `<a class="genre">${genreArray[i].name}</a>`;
        }
    
        return genreHTML;
    }
    
    function makePlatforms(platformsArray) {
    
        let platformsHTML = "";
    
        for (let i = 0; i < platformsArray.length; i++) {
            platformsHTML += `<span>${platformsArray[i].platform.name}</span>`;
        }
    
        return platformsHTML;
    }
 
function eventListner() { 
 const container = document.querySelector(".container.results");

 function respondToClick() {
    console.log(`The button was clicked`);
 }

 const button = document.querySelector(".btn.btn-primary");

 const callAfterClick = function() {
     console.log("A click happened");
 }
 button.addEventListener("click", callAfterClick);

 // pass function into the method as argument
 //don`t need the last one
 // document.addEventListener("click", callAfterClick);

function callOnHover() {
    console.log("I am hovering!");
}
button.addEventListener("mouseover", callOnHover);

const textInput = document.querySelector(".text-input");

function callAfterKeyIsReleased(event) {
    console.dir(event);
    console.log("name", event.target.name);
    console.log("value", event.target.value);
    console.log("A key was pressed 😈");
}

textInput.addEventListener("keyup", callAfterKeyIsReleased);
}

const button = document.querySelectorAll(".btn.btn-secondary");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", loadGames);
}
