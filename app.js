// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let participantes = [];

// Funcion para agregar amigos
function agregarAmigo() {

        const input = document.getElementById('amigo');
        const nombre = input.value.trim();

        // verifico si el nombre no esta vació y no está repetido 
        if (nombre && !participantes.includes(nombre))  {
            participantes.push(nombre);

            // agrego el nombre a la lista
            const lista = document.getElementById('listaAmigos');
            const li = document.createElement('li');
            li.textContent = nombre;
            lista.appendChild(li);

            // limpio el campo de entrada 
            input.value = '';

        } else  {
            alert('Por favor, ingresa un nombre válido y único');

        }
}

// realizo sorteo 
function sortearAmigo() {
    // verifico si hay suficientes participantes
    if (participantes.length < 2) {
        alert('Se necesitan al menos dos participantes');
        return;

    }
    // asigno los amigos secretos
    //const amigoSecretoElegido = elegirAmigoSecreto(participantes);

    // Muestro amigo seleccionado
    mostrarResultado(participantes);


}



// muestro resultado 
function mostrarResultado(participantes) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // limpio resultados previos

    // elijo un amigo 
    const amgioAleatorio = participantes[Math.floor(Math.random() * participantes.length)];
    const li = document.createElement('li');
    li.textContent = `El amigo secreto sorteado es: ${amgioAleatorio}`;

    resultadoDiv.appendChild(li);




}

