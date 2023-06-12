// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Uva', 'Melancia', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Granola', 'Mel'];

const fruitSalad = (fruit, additional) => {
 const copoCompleto = [...fruit, ...additional];
 return copoCompleto;
};

console.log(fruitSalad(specialFruit, additionalItens));