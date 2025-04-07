var contenedor = document.querySelector("#contenedor");

document.getElementById("agregarFinal").addEventListener("click", function () {
    // Crear un nuevo párrafo
    let parrafo = document.createElement("p");
    //añadir texto al párrafo
    parrafo.innerHTML = document.getElementById("texto").value; // TEXTO se refiere al ID del lugar en donde introducimos el contenido que queremos que se agregue
    //añadir el párrafo al contenedor
    contenedor.append(parrafo);
    //agregar el color de texto del nuevo parrafo sea rojo
    parrafo.style.color = "red";
});

//agregar párrafo al principio
document.getElementById("agregarPpio").addEventListener("click", function () {
    // Crear un nuevo párrafo
    let parrafo = document.createElement("p");
    //añadir texto al párrafo
    parrafo.innerText = document.getElementById("texto").value; // TEXTO se refiere al ID del lugar en donde introducimos el contenido que queremos que se agregue
    //añadir el párrafo al contenedor .prepend(parrafo)
    contenedor.prepend(parrafo);
    //agregar estilos al párrafo texto azul
    parrafo.style.color = "blue";
});

//agregar párrafo en una posición concreta (lo agrega en el segundo párrafo)
document.getElementById("agregarPosicion").addEventListener("click", function () {
    // Crear un nuevo párrafo
    let parrafo = document.createElement("p");
    //añadir texto al párrafo
    parrafo.innerText = document.getElementById("texto").value; // TEXTO se refiere al ID del lugar en donde introducimos el contenido que queremos que se agregue
    //añadir el párrafo al contenedor insertBefore
    let contenedor = document.getElementById("contenedor");

    // elegir un párrafo de referencia en la posición deseada (por ejemplo, el segundo párrafo. si fuera el primer parrafo el indice empezaría en 0)
    let referencia = contenedor.children[1];

    // añadir el párrafo antes de la referencia si existe
    if (referencia) {
        contenedor.insertBefore(parrafo, referencia);
    } else {
        // si no hay suficiente contenido, se añade al final
        contenedor.append(parrafo);
    }

    //agregar estilos color del texto verde
    parrafo.style.color = "green";
});

//eliminar el primer párrafo (CORREGIR)
document.getElementById("eliminar").addEventListener("click", function () {
    //definir el contenedor
    let contenedor = document.getElementById("contenedor");
    //seleccionar el primer parrafo
    let primerParrafo = contenedor.querySelector("p");
    //eliminar el primer párrafo
    if (primerParrafo) {
        contenedor.removeChild(primerParrafo);
    }
});

//corregido
document.getElementById("eliminarTodos").addEventListener("click", function () {
    //eliminar todos los párrafos
    document.getElementById("contenedor").innerHTML = "";
});