//6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

let cavalo;
let bispo;
let peao;
let rei;
let rainha;
let torre;

switch(){
    case cavalo.toLowerCase(): 
    console.log("Se movimenta em L (Duas casas para frente e uma para o lado)");
    break;
    
    case bispo.toLowerCase():
    console.log("Se movimenta nas diagonais (Como em um X)");
    break;
    
    case peao.toLowerCase():
    console.log("Se movimenta apenas uma casa para frente (com exeção da primeira movimentação, que poderá ser duas casas");
    break;
    
    case rei.toLowerCase():
    console.log("Se movimenta em qualquer direção (Mas apenas UMA casa");
    break;
    
    case rainha.toLowerCase():
    console.log("Se movimenta em qualquer direção (e quantas casas desejar)");
    break;
    
    case torre.toLowerCase():
    console.log("Se movimenta na horizontal (como em u + )");
    break;
    
    default:
        console.log("ERRO! não é uma peça de xadres.")


}