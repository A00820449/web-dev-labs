const animals = ["dog", "cat", "bear", "duck", "monkey", "lion", "tiger", "shark", "parrot", "penguin"];
const API_KEY = "pgdoxa7pFTvlyOfYO0D6kY6K44c85Gsc"; // don't steal pls

const buttonsDiv = $("#animal-buttons");
const animalsDiv = $("#animals");

function renderImages(res) {
    console.log(res);
    animalsDiv.html("");
    for (const gifData of res.data) {
        animalsDiv
        .append($(`<img/>`).attr("src", gifData.images.original.url));
    }
}

$(document).ready(function() {
    // Start your code from here
    for (const animal of animals) {
        buttonsDiv.append($(`<button></button>`).text(animal));
    }

    buttonsDiv.on("click", "button", function(){
        const animal = $(this).text() || "";
        //window.alert(animal);
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${animal}&limit=10`,
            success: renderImages,
            error(e) {
                console.log(e);
            }
        });
    });

});
