const palabra: string  = "rayar";
const palabraAlrevez: string [] = [];

for (let i = 0; i < palabra.length; i++) {
  let revertidor: string = palabra[i];
  palabraAlrevez.push(revertidor);

}

if (palabraAlrevez[0] === palabraAlrevez[palabraAlrevez.length - 1]) {
 
  console.log("Esta palabra se puede escribe igual al derecho y al revez: " + palabraAlrevez);
} else {
  console.log("Esta palabra no se puede escribe igual al revez");
}