let nombre = new Array();
let tipoVenta = new Array();
let totalpag = new Array();

let com
let com2
let com3
let ana=0
let val=0
let tem=0

let can = parseInt(prompt("Cantidad de meseros: "))
for (let index = 1; index <= can; index++) {
    let nom = prompt('Ingresa nombre (Anacleto, Valloleidys, Temistocles): '+index);
    let tipo = parseInt(prompt('Ingresa tipos de ventas (1: contado; 2: cheque; 3: tarjeta): '+index));
    let tot = parseFloat(prompt('Ingresa Total a pagar: '+index));
    nombre[index] = nom;
    totalpag[index] = tot;
    com2=totalpag[index]*0.07;
    console.log(com2)
    tipoVenta[index] = tipo;
    switch (tipo) {
        case 1:
            com=totalpag[index]*0.15;
            console.log(com)
        break;
        case 2:
            com=totalpag[index]*0.1
            console.log(com)
        break;
        case 3:
            com=totalpag[index]*0.05
            console.log(com)
        break;
        default:
            alert('Error de tipos de ventas')
    }
    com3=com+com2
    switch (nom) {
        case 'Anacleto':
            ana=ana+com3
        break;
        case 'Valloleidys':
            val=val+com3
            console.log('Valloleidys')
        break;
        case 'Temistocles':
            tem=tem+com3
            console.log('Temistocles')
        break;
        default:
            alert('Error de nombre')
    }
}
document.write("Nombre: Anacleto y total comisión: "+ana+"<br>")
document.write("Nombre: Valloleidys y total comisión: "+val+"<br>")
document.write("Nombre: Temistocles y total comisión: "+tem)

