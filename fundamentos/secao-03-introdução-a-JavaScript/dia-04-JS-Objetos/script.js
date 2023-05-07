//Crie uma variável player e atribua a ela um objeto que contenha as variáveis listadas na sequência.

let player = {
    name: 'Mats',
    lastName: 'Silva',
    age: 25,
    medals: {
        golden: 3,
        silver: 5,
    }
}

console.log('O Jogador ' + player.name + ' tem ' + player.age + ' anos de idade.');

player.bestInTheWorld = ['2006, 2007, 2008, 2009, 2010, 2018'];

console.log('O Jogador ' + player.name + ' foi eleito o melhor do mundo por 6 vezes! ' + player['bestInTheWorld']);

console.log('O jogador ' + player.name +  ' Possui ' + player.medals.golden + ' de ouro e ' + player.medals.silver + '  medalhas de prata.');
