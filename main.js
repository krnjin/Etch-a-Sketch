var num = 0;
const container = document.querySelector("#container");

/*
for (var x = 0; x < 16; x++){
    var row = document.createElement("div");
    row.className = "row";
    for (var y = 0; y < 16; y++){
        var col = document.createElement("div");
        col.className = "col";
        row.appendChild(col);
    }
    container.appendChild(row);
}
*/

createGrid(16);

document.getElementById("btn3").addEventListener("click",clearBox);
document.getElementById("btn1").addEventListener("click",resetSize);

function clearBox(){
    const _col = document.querySelectorAll(".col");
    _col.forEach(col => col.style.backgroundColor = "white");
}



function createGrid(x){
    for (var i = 0; i < x; i++){
        var row = document.createElement("div");
        row.className = "row";
        for (var j = 0; j < x; j++){
            var col = document.createElement("div");
            col.className = "col";
            row.appendChild(col);
        }
        container.appendChild(row);
    }
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
/*
// jquery
$(document).ready(function(){
    $(".col").hover(function(){
        $(this).css("background-color", "black");
    });
});
*/


/*

example of creating a grid

//Creates grid of boxes
function createGrid(boxesPerRow) {
    let percentageOfGrid = 100 / boxesPerRow;
    for (let i = 0; i < boxesPerRow; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('style', `width: 100%; height: ${percentageOfGrid}%`);
        for (let j = 0; j < boxesPerRow; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.classList.remove('tooDark');
            box.setAttribute('style', `background:white; width: ${percentageOfGrid}%; height: 100%; float: left`);
            row.appendChild(box);
        }
        container.appendChild(row);
    };
};
*/