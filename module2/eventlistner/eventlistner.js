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