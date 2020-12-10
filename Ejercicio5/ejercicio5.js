let numero =  [];
let resultado = []
let acu = 0


for(let i=1; i<=10; i++) {
    let num = Number(prompt("Ingrese un número "+i))
    numero[i]=num
    acu+=numero[i]
}
resultado=acu/10
console.log(resultado)
document.write("El promedio es "+resultado)
