// 3)	lea 10 números por teclado, 5 para un array y 5 para otro array distinto. Mostrar los 10 números 
// en pantalla mediante un solo array.

let numero = new Array();
let numero2 = new Array();
let numero3 = new Array();
let num;


for (let index = 0; index < 5; index++) {
    num = Number(prompt("Ingrese número: "))
    numero[index] = num
}

for (let index = 0; index < 5; index++) {
    num = Number(prompt("Ingrese número: "))
    numero2[index] = num
}

numero3 = numero.concat(numero2);           
console.log(numero3)