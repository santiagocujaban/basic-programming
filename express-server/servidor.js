var express = require("express");
var aplicacion = express();

var port = 8989;

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
  resultado.send("Este es el <strong>home</strong> genial!!");
}

function cursos(peticion, resultado)
{
  resultado.send("Estos son los <strong>cursos</strong>");
}

aplicacion.listen(port, port_on);

function port_on() {
  console.log("Server on port: " + port);
}

