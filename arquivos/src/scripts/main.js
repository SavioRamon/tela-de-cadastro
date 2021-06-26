import "../style/main.scss";




function validando(){

    limpaErro();
    
    const formulario = document.querySelector("#formulario-cadastro");
    const inputsCadastro = document.querySelectorAll(".input-cadastro");
    
    let enviar = true;
    
    for(let input of inputsCadastro) {

        let analise = analisaInput(input);
        if(analise) {
            mostraErro(input, analise);
            enviar = false;
        } 
    }
    
    if(enviar === true) {
        formulario.submit();
    }
}



function analisaInput(input) {

    if(input.value === "") {
        return "Campo não pode ser vazio";
    }

    switch(input.getAttribute("name")) {
        
        case "nome":

            if(input.value.length > 10) {
                return  "No máximo 10 carácteres";
            }
            
        break

        case "email":
            
            if(input.value !== '') {
                let regex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if(!regex.test(input.value.toLowerCase())) {
                    return `E-mail inválido!`;
                }
            }

        break;

        case "senha":
            
            if(input.value.length < 4) {
                return `Campo precisa ter pelo menos ${4} caracteres`;
            }
            
        break;
    }
}

function mostraErro(input, erro) {
    // exibe uma mensagem de erro logo abaixo de um input de cadastro

    input.style.border = "none"
    input.style.boxShadow = "0px 0px 2px red"
    
    const erroMensagem = document.createElement("div");
    erroMensagem.setAttribute("class", "erro");

    const simboloErro = "&#10008;";

    erroMensagem.innerHTML = `${simboloErro} ${erro}`;

    input.parentElement.insertBefore(erroMensagem, input.ElementSibling);
}


function limpaErro() {

    // apaga todos os estilos anteriormente adicionados
    let inputs = document.querySelectorAll(".input-cadastro");
    for(let input of inputs) {
        input.style = "";
    }
    
    // apaga todas as mensagens de erro
    let erroMensagens = document.querySelectorAll(".erro");
    for(let erro of erroMensagens) {
        erro.remove();
    }
}


const enviar = document.querySelector(".criar");
enviar.onclick = () => validando();