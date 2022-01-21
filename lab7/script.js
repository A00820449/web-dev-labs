const animals = ["dog", "cat", "bear", "duck", "monkey", "lion", "tiger", "shark", "parrot", "penguin"];
const API_KEY = "pgdoxa7pFTvlyOfYO0D6kY6K44c85Gsc"; // don't steal pls

const buttonsDiv = $("#animal-buttons");
const animalsDiv = $("#animals");
const animalInput = $("#animal-input");

function appendAnimalsDiv(animal) {
    buttonsDiv.append($(`<button></button>`).text(animal))
}

function addAnimal(event) {
    event.preventDefault();
    const newAnimal = animalInput.val().trim();

    if (newAnimal === "") { return; }

    animalInput.val("");
    animals.push(newAnimal);
    appendAnimalsDiv(newAnimal);
}

function loadImages(){
    const animal = $(this).text() || "";

    $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${animal}&limit=10`,
        
        error(e) {
            console.error(e);
            animalsDiv.text(`An error ocurred while making the API request. See console for details. (${e.statusText})`);
        },

        success(res) {
            animalsDiv.html("");
            for (const gifData of res.data) {
                animalsDiv
                .append(
                    $(`<div class="animal-item"></div>`)
                    .append($(`<p></p>`).text(`Rating: ${gifData.rating}`))
                    .append($(`<img still="true"/>`).attr("src", gifData.images.fixed_height_still.url).attr("gify-id", gifData.id).attr("alt", gifData.title).attr("draggable", false))
                );
            }
        }
        
    });
}

function animalToggle() {
    const isStill = $(this).attr("still") || "false";
    const id = $(this).attr("gify-id")
    const img = $(this);

    function requestError(e){
        console.error(e);
        img.attr("still", "true");
        img.attr("alt", `An error occurred loading this image.`);
        img.attr("src", null);
    }

    if (isStill === "false") {
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`,
            success(res){
                console.log(res);
                img.attr("still", "true");
                img.attr("src", res.data.images.fixed_height_still.url);
                img.attr("alt", res.data.title)
            },
            error: requestError
        });
    }
    else {
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`,
            success(res){
                console.log(res);
                img.attr("still", "false");
                img.attr("src", res.data.images.fixed_height.url);
                img.attr("alt", res.data.title)
            },
            error: requestError
        });

    }
}

$(document).ready(function() {
    // Start your code from here
    for (const animal of animals) {
        appendAnimalsDiv(animal);
    }

    buttonsDiv.on("click", "button", loadImages);
    animalsDiv.on("click", "img", animalToggle);

    $("#animal-form").submit(addAnimal);
});
