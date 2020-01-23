
const CONTAINER = document.querySelector(".container");
console.dir(CONTAINER);

let newHTML = "";
let ratingValue = "Not rated";

for (let i = 0; i < actionGames.length; i++) {
    //const NAME = "<h4>" + actionGames[i].name + "</h4>" //ES5
    //const NAME = `<h4> ${actionGames[i].name} </h4>`; //ES6
    if (actionGames[i].rating) {
        ratingValue = actionGames[i].rating;
    } else {
        ratingValue = "Not rated";
    }

    const DETAILS = `
    <div class="card">
    <div class="image" style="background-image: url(${actionGames[i].background_image});"></div>
    <div class="details">
        <h4 class="name">${actionGames[i].name}</h4>
        <div class="rating">${ratingValue}</div>
    </div>
</div>`;

    //newHTML = newHTML + DETAILS //longFrom
    newHTML += DETAILS   
 }

 CONTAINER.innerHTML = newHTML;
 console.log(newHTML);

 


 
