var arregloPalabras = ["ESCRITORIO", "LAMPARA", "COLOMBIA", "COMPUTADOR", "AMERICA", "SEMANA", "MIERCOLES", "PAISAJE"];

var botonReiniciar = document.querySelector("#Reiniciar");

var palabraNueva = document.querySelector("#input-nueva-palabra");



var inicio = false;

var letrasErradas=[];
var letrasCorrectas=[];
var letrasUsadas=[];
var elementoArreglo =  arregloPalabras[Math.floor(Math.random()*arregloPalabras.length)];



function iniciarJuego()
{
	//inicio = true;
	pincel.clearRect(0, 0, pantalla.width, pantalla.height);
	base();
	var palabra=elegirPalabra(arregloPalabras);
	//alert(palabra);
	guiones(palabra);
	
	teclas(palabra);

}

/*botonReiniciar.addEventListener("click", function (event) {
    
    event.preventDefault();
    
	iniciarJuego();
  
});*/

function elegirPalabra(arregloPalabras)
{
	//var elementoArreglo =  arregloPalabras[Math.floor(Math.random()*arregloPalabras.length)];
	//alert(elementoArreglo);
	var palabra=elementoArreglo.split("");  
	return palabra;
}

function guiones(palabra)
{	
	for(var i in palabra)
	{
		pincel.lineWidth = 3;
		pincel.strokeStyle='blue';
		pincel.beginPath();
        pincel.moveTo ((500+i*50),410); 
        pincel.lineTo((530+i*50),410);
        pincel.closePath();
        pincel.stroke();
		
		
	}
	
}

function teclas(palabra)
{
	window.addEventListener("keyup", function(evento)	{
		//var errores = 0; 
		//var aciertos = 0;
		//var cuentaTeclas = 0;
		inicio = true;
		var fallo = true;
		//console.log("largo palabra: " + palabra.length);
		var tecla = evento.key.toUpperCase();
		var ascii = evento.keyCode;
		if(ascii > 64 && ascii < 91 && ascii != 20)
		{
			
				
			
			for(var i in palabra)
			{
					if(palabra[i] == tecla)
					{
						dibujarLetras(tecla, i);
						letrasCorrectas.push(tecla);
						fallo = false;
					}
					
					
					
					if(letrasCorrectas.length == palabra.length)
					{
							inicio = false;
							dibujarGano();
							botonReiniciar.focus();
							
					}
					
																
			}
				
						
			if(fallo)
			{
			
				letrasRepetidas(letrasErradas, tecla);
				//letrasErradas.push(tecla);
				//let erradas = letrasErradas;
				
				
				
				for(var pos in letrasErradas)
				{
					if(letrasErradas[pos] == tecla)
					{
						dibujarErradas(tecla, pos);
						
					}	
				}
				
				if(letrasErradas.length == 1)
				{
					paloVerticalCorto();								
				}
				
				if(letrasErradas.length == 2)
				{
					cabeza();								
				}
				
				if(letrasErradas.length == 3)
				{
					cuerpo();								
				}
				
				if(letrasErradas.length == 4)
				{
					brazoIzquierdo();								
				}
				
				if(letrasErradas.length == 5)
				{
					brazoDerecho();								
				}
				
				if(letrasErradas.length == 6)
				{
					piernaIzquierda();								
				}
				
				if(letrasErradas.length == 7)
				{
					piernaDerecha();
					dibujarPerdio();
					dibujarPalabraSecreta(elementoArreglo);
					
					
				}
			}		
		}
				
	})
	
	
}

function letrasRepetidas(letrasErradas, letra)
{
	
	if(letrasErradas.indexOf(letra) == -1)
	{
		letrasErradas.push(letra);
		
	}
	else if(letrasErradas.indexOf(letra)> -1)
	{
		alert(letra + " ya usada");
	}

}

/***Valida si una palabra ya existe en el vector y/o permite agregarla******/
function agregarPalabras(arregloPalabras)
{
	var palabraIngresada = palabraNueva.value;
	
	if(palabraIngresada == "" || palabraIngresada.length < 2)
	{
		alert("Palabra no Válida!");
		return false;
	}
	
	
	if(arregloPalabras.indexOf(palabraIngresada) == -1)
	{
		arregloPalabras.push(palabraIngresada);
		alert("Palabra Ingresada");
		document.querySelector("#input-nueva-palabra").value = "";
		
		
	}
	else if(arregloPalabras.indexOf(palabraIngresada)> -1)
	{
		alert(palabraIngresada + " ya usada");
		alert("Palabra existente, intento con otra");
		document.querySelector("#input-nueva-palabra").value = "";
	}
}


var botonIniciarJuego = document.querySelector("#iniciar-juego");
botonIniciarJuego.onclick = iniciarJuego();


//botonReiniciar.onclick = iniciarJuego();

var botonAgregarPalabra = document.querySelector("#nueva-palabra");
botonAgregarPalabra.onclick = agregarPalabras(arregloPalabras);


