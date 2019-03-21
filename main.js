const container = document.querySelector("#container");

function createGrid(x){
    for (var row = 0; row < x; row++){
        for (var col = 0; col < x; col++){
            $("#container").append("<div id='grid'></div>");
        };
    };

    $("#grid").height(1000/x);
    $("#grid").width(1000/x)

}


$(document).ready(function()){
    createGrid(16)
}