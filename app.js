// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables
//variable amigos por amigosArr para no confundir con el id
let amigosArr = [];


function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo').value;
    
    if (inputAmigo.trim() === ''){
        alert('Inserte un nombre, por favor');

    } else {
        //agregar nombre
        amigosArr.push(inputAmigo);
        //limpiar
        document.getElementById('amigo').value = '';
        verListaAmigos();
    }
    return;
}


function verListaAmigos() {
   let nListaAmigos = document.getElementById('listaAmigos');
    nListaAmigos.innerHTML = '';

    for (let index = 0; index < amigosArr.length; index++) {
        let element = amigosArr[index];
        
        let listaHTML = document.createElement('li');
        listaHTML.textContent = element;
        nListaAmigos.appendChild(listaHTML);
    }
}


function sortearAmigo() {
    let cantAmigos = amigosArr.length;
    if (cantAmigos === 0) {
        alert('Inserte un nombre antes del sorteo');
    } else {
        let indiceAmigoArr = Math.floor(Math.random()*cantAmigos);
        let resultadoHTML = document.getElementById('resultado');
        resultadoHTML.innerHTML = amigosArr[indiceAmigoArr];
    }
}