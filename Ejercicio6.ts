var Personas = [{ Nombre: 'Victor', sexo: 'Masculino' }, { Nombre: 'Estela', sexo: 'Femenino' }]
var prefijo = []

for (var i = 0; i < Personas.length; i++) { 
    if (Personas[i].sexo == 'Masculino') { 
        prefijo.push({ Nombre: 'Sr. ' + Personas[i].Nombre }) 
    } else {
        prefijo.push({ Nombre: 'Srta. ' + Personas[i].Nombre })
    }
}

console.log(Personas)//datos de las personas ingresadas
console.log(prefijo)//datos de las personas con el prefijo correspondiente