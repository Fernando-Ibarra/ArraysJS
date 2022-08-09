const elements = ["Fire", "Air", "Water"];

let rta1 = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rta1 = rta1 + element + separator;
}

const rta2 = elements.join('--');
console.log('For', rta1);
console.log('Join', rta2);

const title = 'Curso de manipulación de arrays';
const rta3_urlFinal = title.split(' ').join('-').toLowerCase();
console.log(rta3_urlFinal);
