let nombre = "Pedro";
let edad = 50;

const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    saludar: function() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    },
};

console.log(persona.saludar());


// this no es compatible con funciones flecha
const otraPersona = {
    nombre: "Maria",
    edad: 25,
    profesion: "Diseñadora",
    saludar: () => `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`,
};

console.log(otraPersona.saludar());