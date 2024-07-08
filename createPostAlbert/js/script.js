const BASE_URL = "https://devto-clonejs-default-rtdb.firebaseio.com/posts.json";

const parserResponsePersonsFireBase = (object) => {
  const listPersonParsed = [];

  for (const key in object) {
    const obectParsed = {
      id: key,
      avatar: object[key].avatar,
      name: object[key].name,
      lastName: object[key].lastName,
      gender: object[key].gender,
      date: object[key].date,
      country: object[key].country,
      description: object[key].description,
    };
    listPersonParsed.push(obectParsed);
  }
  return listPersonParsed;
};

const getPostsApi = async () => {
  try {
    const response = await fetch(`${BASE_URL}/.json`, {
      method: "GET",
    });
    const parsed = await response.json();
    const results = parserResponsePersonsFireBase(parsed);
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};

getPostsApi();

function agregarEtiqueta() {
  // Obtener el contenido ingresado por el usuario
  let contenido = document.getElementById("contenidoEtiqueta").value;

  // Validar que el campo no esté vacío
  if (contenido.trim() === "") {
    alert("Por favor ingrese contenido para la etiqueta.");
    return;
  }

  // Crear un nuevo elemento span
  let nuevaEtiqueta = document.createElement("span");

  // Configurar el contenido de la etiqueta
  nuevaEtiqueta.textContent = contenido;

  // Agregar clases, atributos, estilos, etc., según sea necesario
  nuevaEtiqueta.classList.add("etiqueta"); // Ejemplo de agregar una clase

  // Agregar la etiqueta al contenedor
  let contenedor = document.getElementById("etiquetasContainer");
  contenedor.appendChild(nuevaEtiqueta);

  // Limpiar el campo de entrada después de agregar la etiqueta
  document.getElementById("contenidoEtiqueta").value = "";
}
