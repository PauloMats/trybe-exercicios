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
