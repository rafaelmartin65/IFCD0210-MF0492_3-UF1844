const screen = {
  2: 0,
  6: 500,
  10: 900,
};
let familias;
let urlFamilias = "../controlador/controlador_localidades.php";
fetch(urlFamilias)
  .then((response) => response.json())
  .then((listadoLocalidades) => {
    console.log(listadoLocalidades);
    let totalLocalidades = Object.keys(listadoLocalidades).length;
    for (let i = 0; i < totalLocalidades; i++) {
      let opcion = document.createElement("option");
      console.log(listadoLocalidades[i]);
      opcion.value = listadoLocalidades[i].id;
      opcion.innerHTML = listadoLocalidades[i].decripcion;
      document.getElementById("localidades").appendChild(opcion);
    }
    let datos;
    let url = "../controlador/controlador_propiedades.php";
    let formulario = new FormData(document.getElementById("filtro"));
    fetch(url, {
        method: "POST",
        body: formulario}
      )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        cargapaginas(data);
      });
  });

// -----------------------------------------------
// Cargamos todos los productos
// -----------------------------------------------  
function cargapaginas(propiedades) {
  let variable = Object.keys(propiedades).length;
  document.getElementById("listado").innerHTML = "";
  for (let i = 0; i < variable; i++) {
    cargapropiedades(propiedades[i]);
  }
}

// -----------------------------------------------
// Cargamos un producto en pantalla
// -----------------------------------------------
function cargapropiedades(producto) {
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

document.getElementById("filtro").addEventListener("change", (event) => {
  event.preventDefault();
  console.log(event.target.value);
  let urlPropiedades = "../controlador/controlador_propiedades.php";
  let datos = new FormData(document.getElementById("filtro"));
  new Response(datos).text().then(console.log)
  fetch(urlPropiedades, {
    method: "POST",
    body: datos
  })
    .then((response) => response.json())
    .then((respuesta) => {
      cargapaginas(respuesta);
    });
});
