

///Array

const carrito = ['producto1', 'producto2', 'producto3'];

console.log(carrito)

carrito.map( producto=> {
    console.log(producto)

})


// ObjectKey

const persona = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Ingeniero',
    ciudad: 'Madrid'
};
console.log(Object.keys(persona)) // ['nombre', 'edad', 'profesion', 'ciudad']


//spred operator - 

let lenguajes = ['JavaScript', 'Python', 'Java'];
let framaeworks = ['React', 'Angular', 'Vue'];

let combinacion = lenguajes.concat(framaeworks);
console.log(combinacion) // ['JavaScript', 'Python', 'Java', 'React', 'Angular', 'Vue']

let conbinacion2 = [...lenguajes, ...framaeworks];

console.log(conbinacion2) // ['JavaScript', 'Python', 'Java', 'React', 'Angular', 'Vue']


