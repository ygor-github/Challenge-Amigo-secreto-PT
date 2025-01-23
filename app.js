//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let addAmigo = document.getElementById("amigo");

function adicionarAmigo() {
    let nome = addAmigo.value;
    if ( nome != ""){
        amigos.push(nome);
        addAmigo.value = "";
        console.log(amigos);
        //listElements();
        
    } else{
        alert("Por favor, insira um nome.")
    }
}
function sortearAmigo(){
    if (amigos.length >= 2) {
    let sorteio = parseInt(Math.random()* amigos.length);
    console.log("O amigo secreto é: " + amigos[sorteio]);
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigos[sorteio]}`;
    amigos = [];
   // listElements();
    } else {
        alert("Precisa adicionar mas de um amigo para poder realizar o sorteio");
    }
    
}