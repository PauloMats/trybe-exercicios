//7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:
//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F
//O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 8;
let percent = (nota * 10);

if (percent >= 90 && percent <= 100) {
    console.log("A");
} else if (percent >= 80 && percent < 90){
    console.log("B");
} else if (percent >= 70 && percent < 80){
    console.log("C");
} else if (percent >= 60 && percent < 70){
    console.log("D");
} else if (percent >= 50 && percent < 50){
    console.log("E");
} else if (percent < 50 && percent >= 0){
    console.log("F");
} else {
    console.log("Erro! Nota inválida.")
}