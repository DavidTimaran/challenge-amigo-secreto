// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let numeroDatos = 0;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto);
    return;
}

function ingresarAmigo(){

    let nombre = document.getElementById('amigo').value;
    if (nombre == 0){
        alert("Por favor, inserte un nombre");
    }
    else{
        listaAmigos.push(nombre);
        console.log(listaAmigos);
        document.querySelector('#amigo').value = " "; // limpia la caja
        numeroDatos = listaAmigos.length;
        actualizaLista();
        return;
    }
}

function actualizaLista(){
    
    let li = document.createElement("li");  //creo el elemento li
    li.innerHTML=" ";
    for (let i = 0; i < numeroDatos; i++){
        li.innerHTML = listaAmigos[i];
        document.querySelector("#listaAmigos").appendChild(li);
    }
    return;
}

function sortearAmigo (){
    if (listaAmigos == 0){
        alert("Por favor, inserte un nombre");
        return;
    }
    else{
        let numeroIndices = listaAmigos.length;
        let numeroPosicion = Math.floor(Math.random()*numeroIndices);
        let amigoSecreto = listaAmigos[numeroPosicion];
        let resultado = document.querySelector('#resultado');
        resultado.innerHTML = amigoSecreto;

        //console.log(amigoSecreto);   
        return; 
    }  
}

