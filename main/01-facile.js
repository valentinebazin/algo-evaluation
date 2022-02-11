/**
 * Programmer une fonction qui renvoie le signe du nombre passé en paramètre :
 * - "POSITIVE" s'il est de signe positif
 * - "NEGATIVE" s'il est de signe négatif
 * - "NUL" s'il est nul
 */
function signe(nombre) { 
    if (nombre > 0)
    return "POSITIF"
    else if (nombre < 0)
    return "NEGATIF"
    else 
    return "NUL"
}

console.log(signe(0))

/**
 * Programmer une fonction prenant en argument un tableau de nombres, et qui renvoie un tableau ne contenant que les nombres pairs.
 * Astuce : un nombre pair est un nombre dont le reste de la division par 2 est 0.
 */
function nombresPairs(nombres) {
    let tableau = [];
    let index = 0
   for (let i = 0; i < nombres.length; ++i){
    if ((nombres[i] % 2) === 0){ 

        tableau[index]=nombres[i]
        index++
       } 
   }
 return tableau
}
let tableauVariables = [15, 192, 6, 1, 152, 6]
console.log(nombresPairs(tableauVariables))
