const productos = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,
    ejecutar: function() {
        console.log("Es un producto de buena calidad")
    },
    informacion: {
        peso: "1 kg",
        medida: "20 pulgadas",
        fabricacion: {
            pais: "Chile",
            empresa: "Spa Ventas",
            verificaPais: function () {
                console.log("El pais es de muy buena garantia")
            }
        }
    }
}

/* 
console.log(productos.nombre)
console.log(productos.informacion.peso)
console.log(productos)
console.log(productos.informacion.fabricacion.pais) 
*/

const persona = {
    nombre: "David",
    apellido: "Cornejo",
    edad: 30,
    ciudad: "Arica",
    saludo: function() {
        console.log("Hola soy David")
    },
    ocupacion: {
        titulo: "Ingeniero informatico",
        aniosExp: 2,
        especialidad: {
            title: "Desarrollador",
            estudios: "Postgrado",
            ejecucion: function() {
                console.log("Es un buen ingeniero")
            }
        }
    }
}

console.log(persona.nombre)
console.log(persona.ciudad)

console.log(persona.ocupacion.aniosExp)
console.log(persona.ocupacion.especialidad.estudios)

persona.saludo()

persona.ocupacion.especialidad.ejecucion()