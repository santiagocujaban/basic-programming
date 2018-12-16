var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClic);
texto.addEventListener("click", clic);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function clic()
{
  alert("escribe el número de lineas que quieras! :)");
}

function pinturilloxd(colorsito,xi,yi,xf,yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = colorsito;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClic()
{
  var xxx = parseInt(texto.value);
  var lineas = xxx;
  var l = 0;
  var xi, yi, xf, yf, rxf, ryf;
  var color = "grey";
  var espacio = ancho / lineas;

  do{
    l++;
    xi = espacio * l;
    yf = espacio * (l + 1);
    pinturilloxd(color,xi,1,299,yf);
    console.log("linea " + l);
  }while(l < lineas);

  for(l = 0; l < lineas; l++)
  {
    xi = espacio * l;
    yi = espacio * (l + 1);
    xf = espacio * l;
    yf = espacio * (l + 1);
    rxf = 299 - xf;
    ryf = 299 - yf;
    pinturilloxd(color,1,yi,xf,299);
    pinturilloxd(color,xi,299,299,ryf);
    pinturilloxd(color,1,yi,rxf,1);
    console.log("linea " + l);
  }

  pinturilloxd(color,1,1,1,299);
  pinturilloxd(color,1,299,299,299);
  pinturilloxd(color,1,1,299,1);
  pinturilloxd(color,299,1,299,299);
}
