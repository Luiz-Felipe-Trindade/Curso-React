//Let and Const

var x = 5; //Forma antiga de declaração de variavel, declara uma variavel no escopo global.

let y = 10; //Forma atual de declaração de variavel, escopo local;
const z = 100; //Forma atual de declaração de constante, declara uma constante no escopo local;



// Arrow functions

const sum = function sum(a, b) {
    return a + b;
}
//is equal to:
const arrowSum = (a, b) => a + b;
//and too equal to:
const longArrowSum = (a, b) => {
    return a + b;
}

console.log(sum(4, 5));
console.log(arrowSum(4, 5));
