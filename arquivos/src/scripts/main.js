import "../style/main.scss";




function validando(){

    
    
    const inputs = document.querySelector("#formulario-cadastro").querySelectorAll("input");
    const inputsFiltrados = [...inputs].filter(input => input.getAttribute("type") !== "button");
    


    for(let input of inputsFiltrados) {
        let analise = analisaInput(input);
        console.log(analise);
    }
    return;



    formulario.submit();
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


const enviar = document.querySelector(".criar");
enviar.onclick = ()=>validando();