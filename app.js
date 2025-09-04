// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables
let amigosArr = [];


function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    
    if (inputAmigo.trim() === ''){
        alert('Inserte un nombre, por favor');
    } else {
        //agregar nombre
        amigosArr.push(inputAmigo.value);
        //limpiar
        document.querySelector('#amigo').value = '';
        verListaAmigos();
    }
    return;
}



