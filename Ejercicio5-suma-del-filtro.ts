const misNumeros:number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const miLimite:number = 3
let miAlmacen:number [] = []
let miSuma = 0

for (let i = 0; i < misNumeros.length; i++){
    let NumerosAsumar = misNumeros[i]
    if(NumerosAsumar > miLimite){
        miAlmacen.push(NumerosAsumar)
    }
}
 console.log(miAlmacen)

 for (let i = 0; i <miAlmacen.length; i++){
    miSuma += miAlmacen[i]
 }
 console.log("La suma de mi arreglo es: " + miSuma)