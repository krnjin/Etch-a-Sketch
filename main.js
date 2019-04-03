var num = 0;
const container = document.querySelector("#container");

createGrid(16);

document.getElementById("btn3").addEventListener("click",clearBox);
document.getElementById("btn1").addEventListener("click",resetSize);

function clearBox(){
    const _col = document.querySelectorAll(".col");
    _col.forEach(col => col.style.backgroundColor = "white");
}



function createGrid(x){
    var sizePerBox = 100 / x;
    for (var i = 0; i < x; i++){
        var row = document.createElement("div");
        row.className = "row";
        //row.setAttribute("style", "width: 100%; height ${sizePerBox}%");
        for (var j = 0; j < x; j++){
            var col = document.createElement("div");
            col.className = "col";
           // col.setAttribute("style", "background: white; width: ${sizePerBox}%; height: 100%; float: left");
            row.appendChild(col);
        }
        container.appendChild(row);
    }

    // jquery
    $(document).ready(function(){
        $(".col").hover(function(){
            $(this).css("background-color", "black");
        });
    });
}

function resetSize(){
    let rows = document.querySelectorAll(".row");
    for (let i=0; i < rows.length;i++){
        container.removeChild(rows[i]);
    }
    num = 0;
    while (num < 2 || num > 64){
        num = prompt("How many boxes do you want per row/column? Please enter between 2 and 64.");
    }
    createGrid(num);
}

// jquery
$(document).ready(function(){
    $(".col").hover(function(){
        $(this).css("background-color", "black");
    });
});

