
function start(){
    $("#ButtonPost").on("click",TodoPost)
    $("#ButtonClear").on("click",TodoClear)
    $("#ButtonMark").on("click",TodoMark)
    $("#ButtonDelete").on("click",TodoDel)
}
 
function TodoPost(e) {
    e.preventDefault()

    let todoText = $("#todoText").val().trim();

    if (todoText === "") {return;}

    $("#todoText").val("");
    
    let div = $(`<div class="todo"></div>`)
    .append(
        $(`<label></label>`)
        .append($(`<input type="checkbox" class="todoCheckBox"/>`))
        .append($(`<span></span>`).text(todoText))
    );
    
    $("#todoList").append(div)
 
}
 
function TodoClear(){
    $(".todoCheckBox").prop("checked", false);
}
 
function TodoMark() {
    $(".todoCheckBox").prop("checked", true);
}
 
function TodoDel() {
    $("#todoList .todo input:checked").parent().parent().remove();
}

$(start)