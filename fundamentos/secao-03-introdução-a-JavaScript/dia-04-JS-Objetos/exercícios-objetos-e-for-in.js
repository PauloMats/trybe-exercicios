let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem-Vinda, ' + info.personagem);

info['recorrente'] = 'sim';

console.log(info.recorrente);

for (let i in info) {
   console.log(i);
}

console.log(info.recorrente);

for (let i in info) {
   console.log(info[i]);
}