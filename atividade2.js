/* 2)Criar uma função em javascript que receba três parâmetros numéricos valor A, valor B e valor C, validar se:

a) O (valor A  + valor C)  é maior que valorB

i) Se for, exibir no console os valores de valor A + Valor C e a soma deles.

 ii) Se não for, exibir no console que os valores de valor A + Valor C é igual ao valor B.

*/

function validarNum(valorA, valorB, valorC){

    soma = valorA + valorC

    if ((valorA + valorC) > valorB){
        console.log(valorA + " + " + valorC + " = " + soma)
    } else {
        console.log(valorA + " + " + valorC + " = " + valorB)
    }

}

validarNum(2,9,6)