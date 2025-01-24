//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let addAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");

function adicionarAmigo() {
    let nome = addAmigo.value;
    resultado.innerHTML = "";
    if ( nome != ""){
        amigos.push(nome);
        addAmigo.value = "";
        listarAmigos();
        
    } else{
      alert("Por favor, insira um nome.")
    }
}

function listarAmigos(){
    let listElement = amigos.map(item => `<li>${item}</li>`).join('');
        listaAmigos.innerHTML = listElement;
}


function sortearAmigo(){
    if (amigos.length >= 2) {
    let sorteio = parseInt(Math.random()* amigos.length);
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigos[sorteio]}`;
    amigos = [];
    listarAmigos();
    } else {
        alert("Para realizar o sorteio, é necessário adicionar mais de um amigo");
    }
    
}