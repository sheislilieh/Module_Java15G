//
//	Pedir al usuario una palabra
//	Devolver la palabra capitalizada
//	p.ej. 'galAxiA'
//	Ouput -> 'Galaxia'
//
  
//let wordCap = prompt("introduce una palabra").toLowerCase().trim()
//let wordCap1= wordCap[0].toUpperCase()+wordCap.substring(1)
//console.log(wordCap1)

//Pedir al usuario una oración (permitir espacios)
//	Capitalizar cada una de las palabras de la oración
//	p.ej. 'En una galaxia muy muy lejana'
//	Ouput -> 'En Una Galaxia Muy Muy Lejana'

const word = prompt("introduce una frase").toLowerCase().trim()
let wordCap3 = " "
for(i = 0; i< word.length; i++){
    if(word[i]== " "){
     //   console.log(word[i+1])
        wordCap3 += " "+word[i+1].toUpperCase()
        i = i+1
    }else{
        wordCap3= wordCap3+word[i]
    }
}
wordCap3= wordCap3.substring(0,1).toUpperCase() + wordCap3.substring(1)
console.log(wordCap3)