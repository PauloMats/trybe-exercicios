let animal = {
    nome: 'Luna',
    idade: 1,
    comida: 'Ração',
}

// Array com as chaves (for in)
for (let i in animal) {
    console.log(i);
}
                        console.log("----------------")  //Apenas para identação

// Array com os valores (for in)
for (let i in animal) {
    console.log(animal[i]);
}
                         console.log("----------------")  //Apenas para identação

// Array com as entradas (for in)
for (let i in animal) {
    console.log(i, animal[i]);

}
console.log("----------------")  //Apenas para identação
//-------------------------------------------------------
console.log("----------------")  //Apenas para identação

// Array com as chaves
let keys = Object.keys(animal);
console.log(keys);

                        console.log("----------------")  //Apenas para identação

//Array com os valores
let value = Object.values(animal);
console.log(value);

                        console.log("----------------")  //Apenas para identação

//Array com as entradas 
let entries = Object.entries(animal);
console.log(entries);