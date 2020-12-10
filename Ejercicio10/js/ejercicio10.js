let id = new Array();
let nom = new Array();
let cate = new Array();
let cili = new Array();
let con1=0
let con2=0
let con3=0
let con4=0
let con5=0
let cont

let can = parseInt(prompt("Cantidad de personas: "))
for (let index = 1; index <= can; index++) {
    let ident = prompt('Ingresa identificación: ');
    let nombre = prompt('Ingresa nombre: ');
    let categoria = parseInt(prompt('Ingresa categoría en la que se inscribió: '));
    let cilindraje = parseInt(prompt('Ingresa cilindraje de la moto: '));
    id[index] = ident;
    nom[index] = nombre;
    cate[index] = categoria;
    cili[index] = cilindraje;
    if (cili[index]>=1 && cili[index]<=100 && cate[index]==1) {
        document.write("Compruebe la validez de la categoría dada, respecto al cilindraje "+"<br>")
        document.write("Si el participante: "+ nom[index]+" y "+ id[index] +"   cumple el requisito"+"<br>")
        document.write("Participante aceptado en categoría 1: "+ nom[index]+"<br>")
        con1++
    } else if (cili[index]>=101 && cili[index]<=250 && cate[index]==2) {
        document.write("Compruebe la validez de la categoría dada, respecto al cilindraje "+"<br>")
        document.write("Si el participante: "+ nom[index]+" y "+ id[index] +" cumple el requisito"+"<br>")
        document.write("Participante aceptado en categoría 2: "+ nom[index]+"<br>")
        con2++
    } else if (cili[index]>=251 && cili[index]<=350 && cate[index]==3) {
        document.write("Compruebe la validez de la categoría dada, respecto al cilindraje "+"<br>")
        document.write("Si el participante: "+ nom[index]+" y "+ id[index] +" cumple el requisito"+"<br>")
        document.write("Participante aceptado en categoría 3: "+ nom[index]+"<br>")
        con3++
    } else if (cili[index]>=351 && cili[index]<=500 && cate[index]==4) {
        document.write("Compruebe la validez de la categoría dada, respecto al cilindraje "+"<br>")
        document.write("Si el participante: "+ nom[index]+" y "+ id[index] +" cumple el requisito"+"<br>")
        document.write("Participante aceptado en categoría 4: "+ nom[index]+"<br>")
        con4++
    } else if (cili[index]>=501 && cate[index]==5) {
        document.write("Compruebe la validez de la categoría dada, respecto al cilindraje "+"<br>")
        document.write("Si el participante: "+ nom[index]+" y "+ id[index] +" cumple el requisito"+"<br>")
        document.write("Participante aceptado en categoría 5: "+ nom[index]+"<br>")
        con5++
    } else {
        document.write("No compruebe la validez de la categoría dada, respecto al cilindraje "+"<br>")
    }
}
document.write("El total de participantes aceptados en categoría 1: "+con1+"<br>")
document.write("El total de participantes aceptados en categoría 2: "+con2+"<br>")
document.write("El total de participantes aceptados en categoría 3: "+con3+"<br>")
document.write("El total de participantes aceptados en categoría 4: "+con4+"<br>")
document.write("El total de participantes aceptados en categoría 5: "+con5+"<br>")
cont=con1+con2+con3+con4+con5
document.write("El total de participantes aceptados: "+cont)