// Objetos: son una pieza clave en js, Un objeto es una colección de propiedades y metodos.
let nombre = "Pedro"
let edad = 30
let email = "correo@gmail.com"

// Objeto puede definirse en una variable
const persona = {
    nombre: "Pedro",
    edad: 30,
    email: "correo@gmail.com",
    saludar: function() {
        return "Buenas tardes"
    }
}

// Notacion de puntos
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.email)
console.log(persona.saludar())


const producto = {
    nombre: "Teclado inalambrico",
    price: 20,
    stock: 5
}

// Notacion de corchetes
console.log("notacion de puntos ", producto.nombre)
console.log("notacion de corchetes ", producto['nombre'])