/*1. Capturar el H1, mediante un ID, en una variable llamada "titulo". */
let $titulo = document.getElementById(`titulo`)
console.log($titulo)

/*2. Crean una variable "tituloPrincipal" cuyo valor sea "Frutas" y cambiar el contenido del título por el de esta variable.*/
let tituloPrincipal = "Frutas"
$titulo.innerText = tituloPrincipal;
$titulo.className += "m-5 text-xl font-bold"

/*3.Capturar el header y el footer, mediante la misma clase, y cambiarles el color a naranja. */
const $thecolor = document.querySelectorAll(`.thecolor`)
$thecolor[0].className = "bg-orange-500";
$thecolor[1].className = "bg-orange-500";

console.log($thecolor);

/*4.Capturar y modificar el p del footer, agregarle tu nombre completo y cohort.*/
const $pfooter = document.getElementById(`pfooter`)
const fullName = "Romero Dalma Denise - Cohort 53";
document.getElementById(`pfooter`).innerText = fullName;
console.log($pfooter)

/*5.Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id. */
const elementoNuevo = document.querySelector("main");
elementoNuevo.innerHTML += "<div class=' flex flex-wrap p-8 justify-center gap-6' id='contenedor'></div>"

const $contenedor = document.getElementById('contenedor')

/*6.Crear una función que devuelva la estructura de una card. La función debe devolver un string para más adelante utilizar innerHTML. (La card debe contener los siguientes datos: nombre, foto y descripción).*/
function crearCards(nombre, foto, descripcion) {
    return `<div class="flex flex-col text-center items-center w-60 border-2 border-amber-500 rounded-2xl" >
<img src="${foto}" alt="Foto de fruta" class="flex w-60 h-48 object-contain"/>
<h3 class="text-xl font-bold">${nombre}</h3>
<p>${descripcion}</p>
</div>`
};
console.log(crearCards)

/*7.Con el archivo data que se encuentra en la carpeta, realizar un bucle para crear cards con los datos de las frutas, utilizando la función del punto 6. (Este bucle podría meterse en otra función y recibir el array por parámetro).*/
function ubicarCards(frutas) {
    let bucleFrutas = ""
    for (const fruta of frutas) {
        bucleFrutas += crearCards(fruta.nombre, fruta.foto, fruta.descripcion)
    }
    return bucleFrutas;
}

/*8.Mostrar las cards con los datos pedidos en el div "#contenedor".*/
$contenedor.innerHTML = ubicarCards(frutas);
console.log($contenedor.innerHTML);

/*9. Crear otro div dentro del main, agregarle el id "lista" y capturarlo mediante ese id. Agregar al div el título "Frutas Dulces".*/

const lista = document.querySelector("main");
lista.innerHTML += "<div id='lista'><h2 class='text-xl font-bold'> Frutas dulces </h2> </div>"

const listaId = document.getElementById('lista')
console.log(listaId)

/*10. Crear una función que reciba un array y devuelva una lista desordenada utilizando nodos (createElement). Cada elemento de la lista será el nombre de una fruta. Para esta lista usar las frutas cuya propiedad "esDulce" sea true.*/

function crearListaDesordenada(frutas) {
    const crearLista = document.createElement(`ul`);
    let listaItem
    for (let fruta of frutas) {
        if (fruta.esDulce) {
            let li = document.createElement(`li`)
            listaItem = fruta.nombre
            li.appendChild(document.createTextNode(listaItem))
            crearLista.appendChild(li)
        }
    }
    return crearLista
}
let listaCompleta = crearListaDesordenada(frutas)

// /*11. Mostrar la lista de frutas dulces en el div "#lista".*/
listaId.appendChild(listaCompleta) 