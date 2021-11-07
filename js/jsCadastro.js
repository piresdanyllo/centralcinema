var nome = document.getElementById("txtNome");
var sobrenome = document.getElementById("txtSobreNome");
var loginCad = document.getElementById("txtLoginCad");
var senhaCad = document.getElementById("txtSenhaCad");
var botaoLimpar = document.getElementById("btnLimpar");

function enviarFormulario(){
    if (nome.value == ""){
        alert("Digite seu nome");
        nome.focus();
        nome.style.border="1px solid red";
        

    } else if (sobrenome.value == ""){
        alert("Digite seu sobrenome");
        sobrenome.focus();  
        nome.style.border = "1px solid #ced4da";              
        sobrenome.style.border = "1px solid red";
        

    } else if (loginCad.value == ""){
            alert("Digite seu email");
            loginCad.focus();
            sobrenome.style.border="1px solid #ced4da";
            loginCad.style.border = "1px solid red"; 
                   
        

    } else if (senhaCad.value == ""){
        alert("Digite sua senha");
        senhaCad.focus();
        loginCad.style.border="1px solid #ced4da";
        senhaCad.style.border = "1px solid red";
        
    } else if (!loginCad.checkValidity()){
        alert("Digite um e-mail válido !");
        nome.style.border = "1px solid #ced4da"; 
        sobrenome.style.border = "1px solid #ced4da"; 
        senhaCad.style.border = "1px solid #ced4da"; 
        loginCad.style.border = "1px solid red";
        loginCad.focus();
    }
    
    else{
        senhaCad.style.border = "1px solid #ced4da";           
        nome.value = "";
        sobrenome.value = "";
        loginCad.value = "";
        senhaCad.value = "";
        loginCad.style.border = "1px solid #ced4da";
        alert("Email enviado com sucesso !");          
    }
}

