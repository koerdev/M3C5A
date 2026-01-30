const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    saludar: function() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    },
};

// console.log(persona);

// Obtener las claves del objeto
const claves = Object.keys(persona);

// console.log(claves);

// Obtener los valores del objeto
const valores = Object.values(persona);

// console.log(valores);

// Obtener una matriz de la clave y el valor del objeto
const entradas = Object.entries(persona);

console.log(entradas);