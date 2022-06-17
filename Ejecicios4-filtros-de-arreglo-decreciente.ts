const arregloInicial: number [] = [1, 2, 3, 4, 5, 6, 7]
const Limite: number = 5
let nuemrosMenores: number [] = []

for (let i = 0; i < arregloInicial.length; i++){
    let Menores: number = arregloInicial[i]
    if (Menores < Limite){
        nuemrosMenores.push(Menores)
    }
}

console.log(nuemrosMenores)