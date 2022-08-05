const numbers = [1, 30, 41, 29, 10, 13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false;
    }
}
console.log('rta ', rta);

const rta2 = numbers.every(element => element <= 40);
console.log('rta2 ', rta2);