const baseUrl = "https://api.rawg.io/api/games/4003/screenshots";

fetch(baseUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        carouselGames(json);
    })
    .catch(function(error) {
        console.dir(error);
    });

    
    function carouselGames(json) {

    for (let i =0; i < games.lenght; i++) {
        console.dir(games.lenght);
    }



}