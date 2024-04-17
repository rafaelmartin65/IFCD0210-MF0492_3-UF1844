const screen = {
  2: 0,
  6: 500,
  10: 900,
};
let familias;
let urlFamilias = "../controlador/controlador_familias.php";
fetch(urlFamilias)
  .then((response) => response.json())
  .then((listadoFamilias) => {
    console.log(listadoFamilias);
    let varFamilia = Object.keys(listadoFamilias).length;
    console.log(varFamilia);

    let datos;
    let url = "../controlador/controlador_articulos.php";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let variable = Object.keys(data).length;
        document.getElementById("listado").innerHTML = "";
        datos = data;
        for (let i = 0; i < variable; i++) {
          cargaproductos(datos[i]);
        }
      });
  });

// -----------------------------------------------
// Cargamos un producto en pantalla
// -----------------------------------------------
function cargaproductos(producto) {
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
      switch (true) {
        case key == "descripcion": {
          let titulo = document.createElement("h5");
          titulo.classList.add("my-0");
          let auxiliar = key.substring(0, 1).toUpperCase() + key.substring(1);
          titulo.innerHTML = `${auxiliar}: ${value}`;
          cuerpo.appendChild(titulo);
          break;
        }
        default: {
          let etiqueta = document.createElement("p");
          let auxiliar = key.substring(0, 1).toUpperCase() + key.substring(1);
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
