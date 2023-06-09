//🚀 Modifique a variável para que respeite o escopo em que está sendo declarada.

function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }

  }
  imprimeIdade();



// 🚀 Altere o valor das propriedades do objeto para que respeite as características da variável do tipo const.

  // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa2 = {
    nome: 'Luna',
    idade: 19
  } // Altere essa estrutura para corrigir o erro.
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);


  //🚀 Modifique a variável para que não ocorra Erro.

  let favoriteFood = 'Lasanha';
  favoriteFood = 'Hambúrguer';
  console.log(favoriteFood);

  //🚀 Modifique as concatenações para template literals

  const name = 'Adriana';
  const lastName = 'Soares';
  console.log(` Olá ${name} ${lastName} !`);
  function soma(a,b) {
    let resultado = a + b;
    return resultado;
  }
  let a = 3;
  let b = 5;
  console.log(`O resultado da soma de a + b é: ${a+b}`);

  //🚀 Modifique a estrutura das funções a seguir para que elas sejam arrow functions.

  const numeroAleatorio = numeroAleatorio => Math.random();
    
  console.log(numeroAleatorio());

  //🚀 Transforme a função hello em uma arrow function.

 const hello = nome => `Olá ${nome}!`
   
  let nome = 'Ivan';
  console.log(hello(nome));

 // 🚀 Transforme a função nomeCompleto em uma arrow function.

 const nomeCompleto = (nome, sobrenome) => `Olá ${nome} ${sobrenome}!`
  
  let nome = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome, sobrenome));

  //🚀 Altere a expressão if/else utilizando ternary operator.

  let speed = 90;
  const speedCar = (speed > 60) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
   
  console.log(speedCar);