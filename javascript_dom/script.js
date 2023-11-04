document.getElementById("hello-world").innerHTML = "AFTER DOM";
// get element by Name
let paragraf = document.getElementsByTagName("p");
paragraf[0].innerHTML = "Hello Felix";

// change color to red for paragraf
paragraf[0].style.color = "red";
let div = document.getElementsByTagName("div");

function clickButton() {
    paragraf[0].innerHTML = "Hello Wendi";
    paragraf[0].style.color = "blue";
    paragraf[0].style.fontSize = "50px";
    paragraf[0].style.backgroundColor = "yellow";
}

function deleteButton(){
    // alert("Delete Button")
    div[0].removeChild(paragraf[0]);
}