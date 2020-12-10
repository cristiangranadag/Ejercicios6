let codEsts = new Array();
let codMats = new Array();
let notas = new Array();
let mayor = 0
let mayor2
let cod
let mat
let est = parseInt(prompt("El número de estudiantes"))
for (let index = 1; index <= est; index++) {
    let codEst = prompt('Código del estudiante')
    codEsts[index] = codEst
    let mat = parseInt(prompt("El número de materias"))
    for (let index2 = 1; index2 <= mat; index2++) {
        let codMat = parseInt(prompt('Código del materia'))
        codMats[index2] = codMat
        let nota = parseFloat(prompt('Nota definitiva'))
        notas[index2] = nota
        if (notas[index2]>=mayor) {
            mayor2 = notas[index2]
            mayor = codMats[index2]
        }
    }
}
document.write("El código de la materia "+mayor+" nota mayor: "+"<br>")