var canvas = document.getElementById("desenho")
console.log(canvas)

var ctx = canvas.getContext("2d");

var x = 20;
var y = 20;
var altura = 100;
var largura = 100;

ctx.fillStyle = "red";
ctx.fillRect(x, y, largura, altura);

ctx.fillStyle = "rgba(0,0,200, 0.5)";
ctx.fillRect(30, 30, 100, 100);

ctx.beginPath();
ctx.arc(150,159,50, 0, Math.PI*2);
ctx.stroke()