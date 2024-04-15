var xhr = new XMLHttpRequest();

var i = 0;

var doc = {
    "userId":1,
    "title":"Olá",
    "body":"Olá Mundo"
}

xhr.onreadystatechange = () => {
    var pronto = xhr.readyState;
    var estado = xhr.status;
    var resposta = xhr.response
    i++;

    console.log("#", i);
    console.log("Estatos de conexão: ",pronto);
    console.log("Estatos de resposta: ",estado);
    console.log(resposta)
}

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts")
xhr.send(doc)