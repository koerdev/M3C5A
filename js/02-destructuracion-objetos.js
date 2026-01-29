const producto = {
    nombre: "Teclado inalambrico",
    price: 20,
    stock: 5,
    disponible: true
}

/* 
let nombre = producto.nombre
let price = producto.price
let stock = producto.stock 
*/

// Destructuring
/* 
let {nombre} = producto
let {price} = producto
let {stock} = producto 
*/

let {nombre, price, stock} = producto

console.log(nombre)
console.log(price)
console.log(stock)

const persona = {
    usuario: "Juan",
    edad: 25,
    genero: "Masculino",
    ciudadNacimiento: "Valparaiso"
}

const {usuario, genero} = persona

console.log(usuario)
console.log(genero)