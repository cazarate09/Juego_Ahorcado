var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");


function base()
{
    pincel.fillStyle = "blue";;
    pincel.beginPath();
	pincel.fillRect(80, 390, 40, 30);
    pincel.fill();
	paloVertical();
}

function paloVertical()
{
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.fillRect(95,50,10,350);
	paloHorizontal();
}

function paloHorizontal()
{
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.fillRect(95,50,200,10);
}

function paloVerticalCorto()
{
	pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.fillRect(295,50,10,50);
}

function cabeza()
{
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(300,141,40,0,2*3.14);
    pincel.fill();
}

function cuerpo()
{
    pincel.fillStyle = "blue";
    pincel.fillRect(295,182,10,130);
}

function brazoIzquierdo()
{
    pincel.strokeStyle = "blue";
	pincel.lineWidth= 10;
    pincel.beginPath();
    pincel.moveTo(295, 191);
    pincel.lineTo(240, 230);
	pincel.stroke();

}

function brazoDerecho()
{
    pincel.strokeStyle = "blue";
	pincel.lineWidth= 10;
    pincel.beginPath();
    pincel.moveTo(306, 191);
    pincel.lineTo(362, 230);
	pincel.stroke();

}

function piernaIzquierda()
{
    pincel.strokeStyle = "blue";
	pincel.lineWidth= 10;
    pincel.beginPath();
    pincel.moveTo(295, 314);
    pincel.lineTo(240, 362);
	pincel.stroke();
}

function piernaDerecha()
{
	pincel.strokeStyle = "blue";
	pincel.lineWidth= 10;
    pincel.beginPath();
    pincel.moveTo(306, 314);
    pincel.lineTo(362, 362);
	pincel.stroke();
}


function dibujarLetras(tecla, i)
{
	pincel.font = "30pt Brush Script MT";
	pincel.fillStyle = "blue";
	pincel.lineWidth = 2;
    pincel.fillText(tecla, (500 + i * 50 ), 400);
}

function dibujarErradas(erradas, posicion)
{
	pincel.font = "20pt verdana";
	pincel.fillStyle = "black";
	pincel.lineWidth = 2;
	pincel.fillText("Erradas", 500, 250);
    pincel.fillText(erradas,(500 + posicion * 40), 300);
}

function dibujarGano()
{
	pincel.font = "70pt Brush Script MT";
	pincel.fillStyle = "blue";
	pincel.lineWidth = 2;
    pincel.fillText("Gan?? el juego :)", 500, 80);
}

function dibujarPerdio()
{
	pincel.font = "70pt Brush Script MT";
	pincel.fillStyle = "blue";
	pincel.lineWidth = 2;
    pincel.fillText("Perdi?? :(", 500, 80);
}

function dibujarPalabraSecreta(palabra)
{
	pincel.font = "20pt Verdana";
	pincel.fillStyle = "blue";
	pincel.lineWidth = 2;
    pincel.fillText("Palabra secreta: " + palabra, 500, 170);
}






