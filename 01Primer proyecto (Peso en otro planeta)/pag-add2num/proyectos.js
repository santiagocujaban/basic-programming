var textouno = document.getElementById("texto_uno");
var textodos = document.getElementById("texto_dos");
var botoncito = document.getElementById("boton");
var botoncitodos = document.getElementById("botondos");

botoncito.addEventListener("click", sumaclic);

function sumaclic()
{
  var resultado = parseInt(textouno.value) + parseInt(textodos.value);
  alert("La suma de tus dos números es de " + resultado);
}

botoncitodos.addEventListener("click", volvera);

function volvera()
{
  location.reload(true);
}
