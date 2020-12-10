let nombres = new Array();
let edades = new Array();

for (let index = 1; index <= 10; index++) {
    let nombre = prompt('Ingresa nombre de la persona? '+index);
    let edad = parseInt(prompt('Ingresa edad de '+nombre+'?'));
    nombres[index] = nombre; 
    edades[index] = edad;
}

for (let index = 1; index <= 10; index++) {
    document.write(nombres[index]+" tiene "+edades[index]+" años"+"</br>")
}