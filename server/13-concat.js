const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element)
}

const rta = elements.concat(otherElements);
console.log('for', newArray);
console.log('concat', rta);