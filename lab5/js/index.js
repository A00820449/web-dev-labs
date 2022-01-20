function start() {
    //Adds item adding functionality
    $(".agregar").click(function(e){
        e.preventDefault();
        
        const todoText = $("#newText").val().trim();

        if (todoText === "") {return;}

        $("#newText").val("")
        
        const todoElem = $(`<li class="lis"></li>`)
        .append($(`<div class="itemShop"></div>`).text(todoText))
        .append($(`<button class="checar">check</button>`))
        .append($(`<button class="del">delete</button>`));
        
        console.log(todoElem)
        
        $(".Lista").append(todoElem);
    });

    //Adds item checking functionality
    $(".Lista").on("click", ".checar", function(){
        $(this).parent().children(".itemShop").toggleClass("chec");
    });

    //Adds item deleting functionality
    $(".Lista").on("click", ".del", function(){
        $(this).parent().remove();
    });
}

$(start)