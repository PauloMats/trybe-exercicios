//1 - Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers. Tente criar duas funções, uma usando reduce e filter, e outra apenas usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaValores = (acc, curr ) => acc + curr;

const somaArray = numbers.reduce(somaValores, 0);

console.log(somaArray);