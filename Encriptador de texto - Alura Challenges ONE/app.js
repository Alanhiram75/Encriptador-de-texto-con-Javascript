//notas para mi en el futuro
// variables vacias
var textoInicial = "";
var textoInicialDes = "";
//funciones
function encriptar() {
  textoInicial = document.getElementById("a1").value; //obtiene el texto inical con el id

  let textoEncriptado = encriptarTexto(textoInicial); //llama a la funcion externa
  document.getElementById("rectangulo1").value = textoEncriptado; //actualiza el valor de r1

  // Borrar la imagen
  document.getElementById("mu").innerHTML = "";

  // Ocultar los párrafos
  document.getElementById("Ningúnmensajefueencontrado").style.display = "none";
  document.getElementById("p2").style.display = "none";

  // Establecer estilos para rectangulo1
  rectangulo1.style.fontFamily = "Inter";
  rectangulo1.style.fontSize = "32px";
  rectangulo1.style.color = "#0a3871";

  //hace visible el boton 3 copiar
  document.getElementById("boton3").style.display = "block";
}

function desencriptar() {
  textoInicialDes = document.getElementById("a1").value; //obtiene el texto inical con el id

  let textodesencriptado = desencriptarTexto(textoInicialDes); //llama a la funcion externa
  document.getElementById("rectangulo1").value = textodesencriptado; //actualiza el valor de r1

  // Borrar la imagen
  document.getElementById("mu").innerHTML = "";

  // Ocultar los párrafos
  document.getElementById("Ningúnmensajefueencontrado").style.display = "none";
  document.getElementById("p2").style.display = "none";

  // Establecer estilos para rectangulo1
  rectangulo1.style.fontFamily = "Inter";
  rectangulo1.style.fontSize = "32px";
  rectangulo1.style.color = "#0a3871";

  //hace visible el boton 3 copiar
  document.getElementById("boton3").style.display = "block";
}

function encriptarTexto(texto) {
  var textoFinal = "";
  //lee el texto letra por letra
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];

    switch (letra) {
      case "e":
        textoFinal += "enter";
        break;
      case "i":
        textoFinal += "imes";
        break;
      case "a":
        textoFinal += "ai";
        break;
      case "o":
        textoFinal += "ober";
        break;
      case "u":
        textoFinal += "ufat";
        break;
      default:
        textoFinal += letra;
    }
  }

  return textoFinal;
}

function desencriptarTexto(texto) {
  let textoEncriptado = document.getElementById("a1").value;
  let textoFinal = "";

  for (let i = 0; i < textoEncriptado.length; i += 4) {
    let letra = textoEncriptado.substring(i, i + 4);

    switch (letra) {
      case "enter":
        textoFinal += "e";
        break;
      case "imes":
        textoFinal += "i";
        break;
      case "ai":
        textoFinal += "a";
        break;
      case "ober":
        textoFinal += "o";
        break;
      case "ufat":
        textoFinal += "u";
        break;
      default:
        textoFinal += letra;
    }
  }

  return textoFinal;
}

function copiar() {
  var rectangulo1 = document.getElementById("rectangulo1");
  rectangulo1.select();

  try {
    //execommand ejecuta
    var exito = document.execCommand("copy");
    console.log(exito);
  } catch (error) {}
}

// un saludo a Alura Latam
