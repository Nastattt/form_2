let table = document.getElementById("bagua-table");
document.addEventListener("DOMContentLoaded", function () {
let currentlyEditingCell = null;

table.addEventListener("click", function (event) {
let cell = event.target.closest("td");
    if (!cell) return;

    if (currentlyEditingCell === cell) return;

exitEditMode();

let text = cell.innerText.trim();
let textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.classList.add("edit-mode");

let okButton = document.createElement("button");
    okButton.innerText = "OK";

let cancelButton = document.createElement("button");
    cancelButton.innerText = "Отмена";

let controlsDiv = document.createElement("div");
    controlsDiv.classList.add("edit-controls");
    controlsDiv.appendChild(okButton);
    controlsDiv.appendChild(cancelButton);

cell.innerHTML = "";
cell.appendChild(textarea);
cell.appendChild(controlsDiv);

currentlyEditingCell = cell;

okButton.addEventListener("click", function (){
    cell.innerText = textarea.value;
    exitEditMode();
});

cancelButton.addEventListener("click", function (){
    exitEditMode();
});

function exitEditMode(){
    if (!currentlyEditingCell) return;
    currentlyEditingCell.innerHTML = textarea.value;
    currentlyEditingCell = null;
    }
});
});