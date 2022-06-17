const arregloOriginal:number [] = [1, 2, 3, 4, 5, 6];
const parametro:number = 4;
let nuevoArreglo: number [] = []

for (let i = 0; i < arregloOriginal.length; i++){
    let almacen: number = arregloOriginal[i]
    if( almacen > parametro){
        nuevoArreglo.push(almacen)
    }
   

}
console.log(nuevoArreglo)
