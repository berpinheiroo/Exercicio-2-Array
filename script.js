/* Crie um algoritmo que pergunte 5 números ao usuário, coloque em um array,
depois exiba tal array. Modifique os elementos do array de modo que a
sequência de números fique ao contrário.
Ex.: se digitou 1, 2, 3,4, 5
 tem que ficar 5, 4, 3, 2 , 1 */

 var num = []
 var numContrario = []
 var contador = 0

 for (i = 0; i < 5; i++){
   num[i] = prompt("Insira um numero")
 }
 console.log(num)

   for(var indexContrario = 4; indexContrario >= 0; indexContrario-- ){
    numContrario[indexContrario] = num[contador]
    contador++
   }

console.log(numContrario)