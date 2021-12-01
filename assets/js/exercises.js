/* 

Función 3:
Imprimir en consola si una oración es un palindromo (puede contener espacios)
anita lava la tina -> True

function palindromo(aString){
    let wordWithoutSpace = " "

}

Función 4:
Imprimir en consola la suma total de todos los digitos de una cantidad 
p.ej. "1234" -> 10
20:32


//1Imprimir en consola las tablas de multiplicar del 1 al 10 
function tablas(){
    for(i=0; i>=10; i++){
         for(j=0; j>=10; i++){
            console.log(`${i} x ${j} = ${i*j}`)
         }
    }
}

//2Imprimir en consola la suma de 1 a N, siendo N un numero entre 1 y 100
function suma(){
    let n = parseInt (prompt('ingresa un numero'))
    for(i = 1; i>=100; i++){
        var suma = 1 + n
    }
console.log(suma)
}

*/
//5Imprimir en consola la suma de los múltiplos de 3 y 5 contenidos entre el 1 y 100
//-> 233168

function multiplo3 (){
    let multiplo3 = 0 
    let i = 100

    for(i =100; i>=1; i--){
        if(i % 3 ===0 && i % 5 === 0){
            multiplo3 = multiplo3 + i
        }
        return multiplo3
    }
}
console.log(`La suma de los multiplos es: ${multiplo3}`)