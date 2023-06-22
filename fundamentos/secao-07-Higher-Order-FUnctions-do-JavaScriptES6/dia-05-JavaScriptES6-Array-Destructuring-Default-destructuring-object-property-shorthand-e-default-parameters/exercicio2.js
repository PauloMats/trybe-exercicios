/* const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const { carro: 'palio', marca: 'Fiat', ano: '2019', } = palio;
const { carro: 'Shelby Cobra', marca: 'Ford', ano: '1963', } = shelbyCobra;
const { carro: 'Chiron', marca: 'Bugatti', ano: '2016', } = chiron;

console.log(palio);
 */

const veiculos = {...palio, ...shelbyCobra, ...chiron};

console.log(veiculos);