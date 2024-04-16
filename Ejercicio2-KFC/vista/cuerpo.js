const
  screen = {
    2: 0,
    6: 500,
    10: 900
};
let datos;
let productosFiltrados;
let datosFamilia;
let totalPaginas;
let idiomaActual;
let elementosPorPagina = 10;
fetch("familias.json")
.then((response) => response.json())
.then((familias) => {
  idiomaActual = "español";
  datosFamilia = familias;
  var url = "../controlador/controlador_articulos.php";
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById("listado").innerHTML = "";
    datos =  data;
    productosFiltrados = data.productos;
    elementosPorPagina = calculoElementosPorPagina();
    for (let i=0;i< elementosPorPagina;i++){
      cargaproductos(data.productos[i],idiomaActual);
    }
    paginador(productosFiltrados, 1);
  });
})


window.addEventListener('resize', () => {
  calculoElementosPorPagina();
});  

function calculoElementosPorPagina(){
 // Obtenemos tamaño de pantalla
 const iw = window.innerWidth;
 
 // Determinamos el tipo de pantalla
 let size = null;
 for (let s in screen) {
   if (iw >= screen[s]) size = s;
 }
 paginador(productosFiltrados,actual());
 cargaPaginas(datos.productos,actual());
 return parseInt(size);
}

function paginador(productos, actual) {
  let paginas = productos.length / elementosPorPagina;
  if (paginas  > Math.trunc(paginas)) totalPaginas = Math.trunc(paginas)+1
  else
    totalPaginas = paginas;
   
  // Controlamos la activacion de anterior y siguiente
  if (actual == 1) {
    document.getElementById("liAnterior").classList.add("disabled")
  } else {
    document.getElementById("liAnterior").classList.remove("disabled")
  }
  if (actual == totalPaginas) {
    document.getElementById("liSiguiente").classList.add("disabled")
  } else {
    document.getElementById("liSiguiente").classList.remove("disabled")
  }
  let fragmento = new DocumentFragment();
  for (let i = 1; i <= totalPaginas; i++) {
    let linea = document.createElement("li");
    let vinculo = document.createElement("a");
    vinculo.href = "";
    let span = document.createElement("span");
    span.classList.add("page-link");
    linea.classList.add("page-item", "mx-3");
    if (i == actual) {
      linea.classList.add("active");
      linea.setAttribute("aria-current", "page");
      span.innerText = i;
      linea.appendChild(span);
    } else {
      vinculo.classList.add("page_link","naranja");
      vinculo.innerText = i;
      vinculo.onclick = cambiaPagina;
      linea.appendChild(vinculo);
    }
    fragmento.appendChild(linea);
  }
  document.getElementById("paginas").innerHTML = "";
  document.getElementById("paginas").appendChild(fragmento);
}
// -----------------------------------------------
// Cargamos un producto en pantalla
// -----------------------------------------------
function cargaproductos(producto, idioma) {
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("card","mx-1");
  tarjeta.style = "width: 15rem;";
  let foto = document.createElement("img");
  foto.src = `./imagenes/${producto.codigo}.jpg`;
  foto.classList.add("card-img-top","img-fluid");
  tarjeta.appendChild(foto);
  let cuerpo = document.createElement("div");
  cuerpo.classList.add("card-body","py-0");
  let entries = Object.entries(producto);
  let fragmento = new DocumentFragment();
  entries.forEach(([key, value]) => {
    if (key != "codigo") {
      if (key == "descripcion") {
        let titulo = document.createElement("h5");
        titulo.classList.add("my-0");
        titulo.innerHTML = `${datos[idioma][key]}: ${value}`;
        cuerpo.appendChild(titulo);
      } else {
        let etiqueta = document.createElement("p");
        etiqueta.classList.add("my-0");
        if (key == "familia"){
          etiqueta.innerHTML = `<b>${datos[idioma][key]}</b>: ${datosFamilia[idioma][value]}`;
        } else {
          etiqueta.innerHTML = `<b>${datos[idioma][key]}</b>: ${value}`;
        }
        fragmento.appendChild(etiqueta);
      }
    }
  });
  cuerpo.appendChild(fragmento);
  tarjeta.appendChild(cuerpo);
  document.getElementById("listado").appendChild(tarjeta);
}

function actual() {
  const paginas = document.getElementById("paginas");
  for (const child of paginas.childNodes) {
    if (Array.from(child.classList).includes("active")) {
      return parseInt(child.firstChild.innerText);
    }
  }
}


function cargaPaginas(productos,paginaActual){
  let inicio = (paginaActual-1) * elementosPorPagina;
  document.getElementById("listado").innerHTML = "";
  if (inicio + elementosPorPagina > productos.length){
    final = productos.length;
  }
    else
  {
    final = inicio + elementosPorPagina;
  };  
  for (let i=inicio;i < final;i++){
    cargaproductos(productos[i], idiomaActual);
  }
}

function cambiaPagina(event){
  event.preventDefault();
  paginador(productosFiltrados,event.target.text);
  cargaPaginas(productosFiltrados,event.target.text);
}
