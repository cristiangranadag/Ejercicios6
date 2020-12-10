let servicios = new Array();
let jornadas = new Array();
let valores = new Array();
let nombres = new Array();
let acu1=0
let acu2=0
let acu3=0
let acu4=0
let con1=0
let con2=0
let con3=0
let con4=0
let mayorS
let conM=0
let conT=0
let conN=0
let mayorT
let masS
let masT

for (let index = 1; index <= 10; index++) {
    let n = prompt('Ingresa nombre del comprador')
    nombres[index] = n;
    let s = parseInt(prompt('Ingresa clase de servicio prestado (valores del 1 al 4)'))
    servicios[index] = s;
    let j = prompt('Ingresa jornada en la que se prestó el servicio (M: mañana, T: tarde, N: noche)')
    jornadas[index] = j;
    let v = parseFloat(prompt('Ingresa valor del servicio'))
    valores[index] = v;

    switch (servicios[s]) {
        case 1:
            acu1+=valores[index]
            con1++
            document.write("Comprador(a): "+nombres[index]+" por servicio #1"+'<br>')
            console.log("1")
        break;
        case 2:
            acu2+=valores[index]
            con2++
            document.write("Comprador(a): "+nombres[index]+" por servicio #2"+'<br>')
            console.log("2")
        break;
        case 3:
            acu3+=valores[index]
            con3++
            document.write("Comprador(a): "+nombres[index]+" por servicio #3"+'<br>')
            console.log("3")
        break;
        case 4:
            acu4+=valores[index]
            con4++
            document.write("Comprador(a): "+nombres[index]+" por servicio #4"+'<br>')
            console.log("4")
        break;
        default:
            alert('Error de servicios')
    }

    switch (jornadas[index]) {
        case 'M':
            conM++
            console.log("mañana")
        break;
        case 'T':
            conT++
            console.log("tarde")
        break;
        case 'N':
            conN++
            console.log("noche")
        break;
        default:
            alert('Error de jornadas')
    }

    if (con1>mayorS) {
        mayorS=con1
        masS=1
    } else if (con2>mayorS) {
        mayorS=con2
        masS=2
    } else if (con3>mayorS) {
        mayorS=con3
        masS=3
    } else {
        mayorS=con4
        masS=4
    }

    if (conM>mayorT) {
        mayorT=conM
        masT='M'
    } else if (conT>mayorT) {
        mayorT=conT
        masT='T'
    } else {
        mayorT=conN
        masT='N'
    } 
}
document.write("Valor por servicio #1 "+acu1+", número de servicio "+con1+'<br>')
document.write("Valor por servicio #2 "+acu2+", número de servicio "+con2+'<br>')
document.write("Valor por servicio #3 "+acu3+", número de servicio "+con3+'<br>')
document.write("Valor por servicio #4 "+acu4+", número de servicio "+con4+'<br>')
document.write("El servicio que más veces se prestó es "+masS+", con cantidad "+mayorS+'<br>')
document.write("Jornada laboral que más veces se prestó es "+masT+", con cantidad "+mayorT+'<br>')