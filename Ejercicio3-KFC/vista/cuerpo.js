const screen = {
  2: 0,
  6: 500,
  10: 900,
};
let datos;
let productosFiltrados;
let datosFamilia;
let totalPaginas;
let idiomaActual;
let elementosPorPagina = 10;
idiomaActual = "español";
var url = "../controlador/controlador_articulos.php";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById("listado").innerHTML = "";
    datos = data;
    productosFiltrados = data.productos;
    elementosPorPagina = calculoElementosPorPagina();
    for (let i = 0; i < elementosPorPagina; i++) {
      cargaproductos(datos[i], idiomaActual);
    }
  });

window.addEventListener("resize", () => {
  calculoElementosPorPagina();
});

function calculoElementosPorPagina() {
  // Obtenemos tamaño de pantalla
  const iw = window.innerWidth;

  // Determinamos el tipo de pantalla
  let size = null;
  for (let s in screen) {
    if (iw >= screen[s]) size = s;
  }
  //  paginador(productosFiltrados,actual());
  cargaPaginas(datos, 1);
  return parseInt(size);
}

// -----------------------------------------------
// Cargamos un producto en pantalla
// -----------------------------------------------
function cargaproductos(producto, idioma) {
  console.log(producto);
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("card", "mx-1");
  tarjeta.style = "width: 15rem;";
  let foto = document.createElement("img");
  foto.src = `./imagenes/${producto.codigo}.jpg`;
  foto.classList.add("card-img-top", "img-fluid");
  tarjeta.appendChild(foto);
  let cuerpo = document.createElement("div");
  cuerpo.classList.add("card-body", "py-0");
  let entries = Object.entries(producto);
  let fragmento = new DocumentFragment();
  entries.forEach(([key, value]) => {
    if (key != "codigo") {
      switch(true){
        case (key == "descripcion"): {
          let titulo = document.createElement("h5");
          titulo.classList.add("my-0");
          let auxiliar = key.substring(0,1).toUpperCase()+key.substring(1);
          titulo.innerHTML = `${auxiliar}: ${value}`;
          cuerpo.appendChild(titulo);
          break;
        };
        default: {
          let etiqueta = document.createElement("p");
          let auxiliar = key.substring(0,1).toUpperCase()+key.substring(1);
          etiqueta.innerHTML = `${auxiliar}: ${value}`;
          etiqueta.classList.add("my-0");
          fragmento.appendChild(etiqueta);
          break;
        }  
      }
    }
  });
  cuerpo.appendChild(fragmento);
  tarjeta.appendChild(cuerpo);
  document.getElementById("listado").appendChild(tarjeta);
}

function cargaPaginas(productos, paginaActual) {
  let inicio = 1;
  let final = productos.length;
  document.getElementById("listado").innerHTML = "";
  for (let i = inicio; i < final; i++) {
    cargaproductos(productos[i], idiomaActual);
  }
}
