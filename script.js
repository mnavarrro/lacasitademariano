// script.js mejorado

const productos = [
  {
    nombre: "Skis Nordica Dobermann",
    precio: 1200,
    imagen: "Imagenes/Dobermann.jpeg",
  },
  {
    nombre: "Skis Head E-Speed",
    precio: 1000,
    imagen: "Imagenes/E-speed.jpeg",
  }
  ,
  {
    nombre: "Skis Atomic Redster",
    precio: 1100,
    imagen: "Imagenes/Redster.jpeg",
  },
  {
    nombre: "Skis Salomon S-Max",
    precio: 950,
    imagen: "Imagenes/S-Max.jpeg",
  },
 

];

const contenedorProductos = document.getElementById("productos-container");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");

let carrito = [];

function mostrarProductos() {
  productos.forEach((producto, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" width="200">
      <h3>${producto.nombre}</h3>
      <p>USD ${producto.precio}</p>
      <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
    `;
    contenedorProductos.appendChild(div);
  });
}

function agregarAlCarrito(index) {
  carrito.push(productos[index]);
  actualizarCarrito();
}

function eliminarDelCarrito(i) {
  carrito.splice(i, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;
  carrito.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.nombre} - USD ${item.precio} <button onclick="eliminarDelCarrito(${i})">X</button>`;
    listaCarrito.appendChild(li);
    total += item.precio;
  });
  totalCarrito.textContent = total;
}

mostrarProductos();
