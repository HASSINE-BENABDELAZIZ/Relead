function E1() {
    alert("msg");
}
function E3() {
    var element = document.getElementById("HA");
    element.style.color="red";
}
function ajout() {
    var lista = documentgetElementById("OL1") ;
    var element = document.createElement("li");
    var text = document.createTextNode("nouvel element") ;
    element.appendChild(text);
    lista.appendChild(element);
}
function E4() {
    var element = document.getElementById("A");
    element.innerText="Nouveau text";
}
function c() {
    var lista = documentgetElementById("OL1") ;
    lista.style.color="red";
}