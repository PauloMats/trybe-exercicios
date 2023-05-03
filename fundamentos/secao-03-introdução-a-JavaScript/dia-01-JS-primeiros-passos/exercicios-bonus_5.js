// 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

let a = 100;
let b = 50;
let c = 30;

if (a + b + c == 180) {
    console.log("true");
} else if ( a < 0 || b < 0 || c < 0){
    console.log("Error! ângulos inválidos.");
} else {
    console.log(false);
}
