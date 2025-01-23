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