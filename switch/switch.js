var day;

switch(new Date().getDay()) {
    case 1:
        day = "Monday";
        break;

    case 2:
        day = "Tuesday";
        break;

    case 3:
        day = "Wednesday";
        break;

    case 4:
        day = "Thursday";
        break;

    case 5:
        day = "Friday";
        break;

    case 6:
        day = "Saturday";
        break;

    case 0:
        day = "Sunday";
        break;
    default:
        day = "I dont know";
}

document.getElementById("test").innerHTML = "It is " + day;