/* var dragItem = document.getElementById("dragElement");
var dropLoc = document.getElementsById("image");
dragItem.ondragstart = function(event) {
    event.dataTransfer.setData('key', 'dragElement');
    console.log("its dragging");
}
dropLoc.ondragover = function(event) {
    event.preventDefault();
    console.log("its dragover");
}
dropLoc.ondrop = function(event) {
    var dropItem = event.dataTransfer.getData('key')
    event.preventDefault();
    console.log("its dropped");
    console.log(dropItem);
    var myElement = document.getElementById(dropItem);
    console.log(myElement);
    var myNewElement = document.createElement('img');
    myNewElement.src = myElement.src;
    dropLoc.appendChild(myNewElement);
}
*/
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("key", ev.target.id);
}

function drop(ev) {
    var id = ev.dataTransfer.getData("key");
    ev.target.appendChild(document.getElementById(id));
}