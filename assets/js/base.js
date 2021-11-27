//let saludo = "hola"
//for(i=0; i <= saludo.length; i++ ){
//console.log(saludo[i])
//}

//  pedir al usuario un string
//  contar las vocales y las consonantes
// imprimir en consola
// 2 vocales y 2 consonantes

const userWord = prompt("introduce una palabra")

if(userWord.length > 0){
    let vowels = 0
    let consonant=0
    for(i = 0; i < userWord.length; i++){
        let letras = userWord[i].toLowerCase()
        if (letras !== " "){
            if(
                letras === "a" || 
                letras === "e" || 
                letras === "i" || 
                letras === "o" || 
                letras === "u"
                ){    
            vowels++
        }else{
            consonant ++
        } 
    }
    }           
    console.log( `${vowels} vocales y ${consonant} consonantes`)
}else{
    console.log("inserta una palabra valida")   
} 
  
    
        
       
   
