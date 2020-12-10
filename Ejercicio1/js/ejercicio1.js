// 1)	Hacer un array de 100 enteros y rellenarlo con números aleatorios. Luego mostrarlos en pantalla.

// Leer
var num = Number(prompt('Ingrese el tamaño del vector'));

var NumeroEntero = new Array(num); //Objeto
var Ejemplo = [num]; //Resumen

// console.log(NumeroEntero.length)

for (let index = 0; index < NumeroEntero.length; index++){
    NumeroEntero[index] = Math.round( Math.random() * (25+1),1)
}

// console.log(NumeroEntero)

// Imprimir
for (let index = 0; index < NumeroEntero.length; index++){
    document.write("El número es: "+NumeroEntero[index] + "</br>" )
}
