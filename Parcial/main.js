const DATA = "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json"
const burguer = document.getElementById("hamburguesas");
const tacos = document.getElementById("tacos");
const ensalada = document.getElementById("salad");
const postre = document.getElementById("desssert");
const bebidas = document.getElementById("drinks");
const tabla = document.getElementById("tabla");
const total = document.getElementById("total");
let datos
fetch(DATA).then(response =>response.json()).then(response => {datos = response});

ensalada.addEventListener("click", function (event) {
  event.preventDefault();
  cargarTabla("Salad");
});

burguer.addEventListener("click", function (event) {
    event.preventDefault();
    cargarTabla("Burguers");
  });

postre.addEventListener("click", function (event) {
    event.preventDefault();
    cargarTabla("Dessert");
});

tacos.addEventListener("click", function (event) {
    event.preventDefault();
    cargarTabla("Tacos");
  });

  bebidas.addEventListener("click", function (event) {
    event.preventDefault();
    cargarTabla("Drinks and Sides");
  });


function cargarTabla(tipo) {
    if (datos.name == tipo){
        productos = datos.name
        productos.forEach(element => {
            tabla.innerHTML = ""
            nodo1 = document.createTextNode(productos.name)
            tabla.appendChild(nodo1)
            nodo2 = document.createTextNode(productos.description)
            tabla.appendChild(nodo2)
            nodo3 = document.createTextNode(productos.price)
            tabla.appendChild(nodo3)
            nodo4 = document.createTextNode(productos.image)
            tabla.appendChild(nodo4)
            contenido.appendChild(tabla)
        })
    }
};


