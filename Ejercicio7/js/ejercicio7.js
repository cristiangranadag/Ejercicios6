v = []
x = 1
j = 0

for (let index = 1; index <= 20; index++) {
    v[index] = Math.round( Math.random() * (20+0),1)
}

for (let index = 1; index <= 20; index++) {
    document.write("Número: "+v[index]+"</br>")
}
document.write('------------------'+'</br>')
index = parseInt(prompt('Ingresa un número: '));

encontrar=index

for (let index = 1; index <= 20; index++) {
    if (encontrar == v[x]) {
        document.write("Ya se encontro "+v[x]+"</br>")
        j++
    } else {
        document.write("No se encontro "+v[x]+"</br>")
    }
    x++
}

document.write("El numero se repite: "+j)
