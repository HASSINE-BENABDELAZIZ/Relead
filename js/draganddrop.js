function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {

    var data = ev.dataTransfer.getData("text");
    var el = ev.target;
    if (!el.classList.contains('dropzone')) {
        el = ev.target.parentNode;
        ev.target.remove();
    }
    //el.appendChild(document.getElementById(data).cloneNode(true));
    var myElement = document.getElementById(data);
    var myNewElement = document.createElement('img');
    myNewElement.src = myElement.id;
    el.appendChild(myNewElement);
}