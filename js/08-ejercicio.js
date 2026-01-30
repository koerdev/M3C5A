const productoMostrar = document.getElementById("app");

const productos = [
    { id: 1, nombre: "Hamburguesas", precio: 8 },
    { id: 2, nombre: "Papas fritas", precio: 3 },
    { id: 3, nombre: "Refresco", precio: 2 },
    { id: 4, nombre: "Helado", precio: 4 },
    { id: 5, nombre: "Ensalada", precio: 5 },
    { id: 6, nombre: "Pizza", precio: 10 },
];

productos.forEach((product) => {
    productoMostrar.innerHTML += `<p>Producto: ${product.nombre} - Precio: ${product.precio}</p>`;
});