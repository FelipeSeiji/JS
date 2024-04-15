var erroEmail = document.querySelector("#ErrorEmail");
var erroTelefone = document.querySelector("#erroTelefone");
var erroMessagem = document.querySelector("#erroMsg");
var infoMsg = document.querySelector("#infoMsg");

function exibirInfo(){

    if(nome.value.leght == 0){
        erroNome.textContent = "Nome é obrigatorio";
    }
    else{
        erroNome.textContent = "";
    }

    if(email.value.leght == 0){
        erroEmail.textContent = "Email é obrigatorio";
    }
    else{
        erroNome.textContent = "";
    }

    if(telefone.value.leght == 0){
        erroTelefone.textContent = "Telefone é obrigatorio";
    }
    else{
        erroTelefone.textContent = "";
    } 
    
    if(mensagem.value.leght == 0){
        erroMessagem.textContent = "Mensagem é obrigatorio";
    }
    else{
        erroMessagem.textContent = "";
    } 

    if((nome.value.leght != 0) && (email.value.leght != 0) && (telefone.value.leght != 0) && (mensagem.value.leght)){
        confirm('Cadastro efetuado com sucesso')
    }
}