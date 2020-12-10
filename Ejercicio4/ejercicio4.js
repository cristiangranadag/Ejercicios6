let numero =  [];
let resultado = []


for(let i=1; i<=5; i++) {
    let num = Number(prompt("Ingrese un número "+i))
    numero[i]=num
    resultado=numero[i]*2
    console.log(resultado)
    document.write(resultado+", ")
}
