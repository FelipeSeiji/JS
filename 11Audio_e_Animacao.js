var canvas = document.getElementById("desenho")

var ctx = canvas.getContext("2d")

// configurações
var x = 20;
var y = 20;
var largura = 100;
var altura = 100;

ctx.fillRect(x,y,altura,largura);

// Anima desenho
function animacao(){
    ctx.clearRect(0,0,canvas.clientWidth, canvas.height);
    ctx.fillRect(x++,y,largura,altura);
}

setInterval(animacao, 10);
