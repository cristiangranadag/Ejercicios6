let añoNaci = new Array();
let sexo = new Array();
let regCarro = new Array();
let nombre = new Array();
let edades = new Array();

let cont25 = 0
let contf = 0
let contm = 0
let contmed = 0

for (let index = 1; index <= 10; index++) {
    let nom = prompt('Ingresa nombre: '+index);
    let edad = parseInt(prompt('Ingresa año de nacimiento: '+index));
    let genero = parseInt(prompt('Ingresa género (1: Femenino, 2: Masculino): '+index));
    let cuidad = parseInt(prompt('Ingresa registro del carro (1: Medellín, 2: Otras ciudades) : '+index));
    nombre[index] = nom;
    añoNaci[index] = edad; 
    años = 2020 - edad
    edades[index] = años
    console.log(años)
    sexo[index] = genero; 
    switch (genero) {
        case 1:
            console.log('Femenino')
        break;
        case 2:
            console.log('Masculino')
        break;
        default:
            alert('Error de género')
    }
    regCarro[index] = cuidad; 
    switch (cuidad) {
        case 1:
            console.log('Medellín')
        break;
        case 2:
            console.log('Otras ciudades')
        break;
        default:
            alert('Error de registro del carro')
    }
}


for (let index = 1; index <= 10; index++) {
    if (sexo[index]==1 && edades[index]<=30) {
        document.write(nombre[index]+' del sexo femenino menores de 30 años'+'<br>')
    }
}

for (let index = 1; index <= 10; index++) {
    if (regCarro[index]==1) {
        document.write(nombre[index]+' y '+edades[index]+' años cuyos carros están registrados en Medellín'+'<br>')
    }
}

for (let index = 1; index <= 10; index++) {
    if (edades[index]<=25) {
        cont25++
    }
}
por25 = (cont25*100)/10
document.write('Porcentaje de conductores menores de 25 años: '+por25+'%'+'<br>')

for (let index = 1; index <= 10; index++) {
    if (sexo[index]==1) {
        contf++
    }
}
porf = (contf*100)/10
document.write('Porcentaje de conductores del sexo femenino: '+porf+'%'+'<br>')

for (let index = 1; index <= 10; index++) {
    if (sexo[index]==2 && edades[index]>=12 && edades[index]<=30) {
        contm++
    }
}
porm = (contm*100)/10
document.write('Porcentaje de conductores masculinos con edades entre 12 y 30 años: '+porm+'%'+'<br>')

for (let index = 1; index <= 10; index++) {
    if (regCarro[index]==2) {
        contmed++
    }
}
pormed = (contmed*100)/10
document.write('Porcentaje de conductores cuyos carros están registrados fuera de Medellín: '+pormed+'%'+'<br>')