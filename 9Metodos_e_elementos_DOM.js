var titulo = document.getElementById("logo");

titulo.innerText = "AAAA";
console.log(titulo.innerText);

titulo.innerHTML = "<b><i>AAAAAAA</i></b>";
console.log(titulo.innerHTML);

//getElementsByTagName
var paragrafos = document.getElementsByTagName("p");
console.log(paragrafos[1].innerText);

//getElementsByClassName
var textos = document.getElementsByClassName("texto");
textos[0].style.color = "red"

//querySelectorAll
var topo = document.querySelectorAll("header")[0];
topo.style.backgroundColor = "yellow"