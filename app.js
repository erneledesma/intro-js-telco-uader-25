
// Variables con let
let nombre = "Juan"
let apellido = "Pérez"
let edad = 30

console.log(nombre)
console.log(apellido)
console.log(edad)

//concatenr con JS

console.log('Nombre:' + nombre + ' ' + 'Apellido:' + apellido 
     + ' ' + 'edad:' + edad)

// template string
console.log(`Nombre: ${nombre} Apellido: ${apellido} Edad: ${edad}`)

// Funciones Declarativas
//Function Declaration

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}
saludar('Ernesto Ledesma')

//Function expression
const cliente = function(nombreCliente) {
    console.log(`Mostrando datos del cliente: ${nombreCliente}`)
}
cliente('Ernesto Ledesma')

function actividad(nombre, actividad) {
    console.log(`Hola soy  ${nombre} y mi profesion es: ${actividad}`)
}

actividad('Ernesto Ledesma', 'Desarrollador Web')
actividad('Marcos Lopez', 'Desarrollador mobile')
actividad('Julieta Soliz')


// parametro por defecto
function actividad(nombre = 'Ernesto Ledesma', actividad = 'Desarrollador Web') {
    console.log(`Hola soy  ${nombre} y mi profesion es: ${actividad}`)
}
actividad('Marcos Lopez', 'Desarrollador mobile')


// arrow function

let antena = (nombre, potencia) => {
    console.log(`marca: ${nombre} potencia: ${potencia}`)

}

antena('Antena 1 Ercisson', '1000W')

