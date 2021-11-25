
   
/**
 * 
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
 let number = parseInt(prompt("Introduce un número del 1 al 100"))
 if(number%2==0){
     console.log("número par")
 }else{
     console.log("número impar")
 }
/**
 * 
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */
 let week = prompt("Escribe un día de la semana")

 switch(week){
     case "lunes":
         console.log("día 1")
         break
     case "martes":
         console.log("día 2")
         break
     case "miércoles":
         console.log("día 3")
         break
     case "jueves":
         console.log("día 4")
         break  
    case "viernes":
         console.log("día 5")
         break  
    case "sábado":
        console.log("día 6")
        break  
    case "domingo":
        console.log("día 7")
        break  
 }
/**
 * 
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */
 let a = parseInt(prompt("Introduce un número"))
 let b = parseInt(prompt("Introduce otro número"))
 
 if(a >= b && b >= a){
     console.log("número mayor", a,b)
 }else{
     console.log("número menor", b)
 }