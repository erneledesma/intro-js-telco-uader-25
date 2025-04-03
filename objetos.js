// objetos literales
// Definición de un objeto literal

const persona = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Ingeniero',
    ciudad: 'Madrid'
};

// Acceso a propiedades del objeto
console.log(persona.nombre); // Juan
console.log(persona)
console.log(persona['edad']); // 30
console.log(persona.profesion); // Ingeniero
console.log(persona.ciudad); // Madrid

// objeto con atributos de una antena GSM
const antenas = {
    nombre: 'Antena 1',
    frecuencia: 900,
    potencia: 50,
    ubicacion: 'CDLU',
    tipo: 'GSM',
    estado: 'Operativa'
},
antena = {
    nombre: 'Antena 2',
    frecuencia: 1800,
    potencia: 30,
    ubicacion: 'CDLU',
    tipo: 'GSM',
    estado: 'Operativa'
},
antena2 = {
    nombre: 'Antena 3',
    frecuencia: 2100,
    potencia: 20,
    ubicacion: 'CDLU',
    tipo: 'GSM',
    estado: 'Operativa'
};
console.log(antenas)
console.log(antena)
console.log(antena2)


