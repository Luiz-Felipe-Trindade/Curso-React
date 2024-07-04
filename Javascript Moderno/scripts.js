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

// Objects

const people1 = new Object();
people1.name = 'Luiz';
people1.lastName = 'Trindade';

//is equal to:

const people2 = {
    name: "Luiz",
    lastName: "Trindade"
};

// filter method:

const array = [5, 4, 3, 2, 1];

const highNumber = array.filter((x) => {
    if (x >= 3) {
        return x;
    }
})
console.log(highNumber);

// Map method:

const products = [
    { name: "Camisa", price: 10.99, category: "Roupas" },
    { name: "Geladeira", price: 1000.99, category: "Eletro" },
    { name: "Calção", price: 30.99, category: "Roupas" },
    { name: "Fogão", price: 500.99, category: "Eletro" },
];


products.map((product) => {
    if (product.category === "Eletro") {
        product.onSale = true;
    }
})

console.log(products);

products.map((product) => {
    if (product.onSale) {
        product.price -= 20;
    }
})

// Template literals

const string = "Template Literal"
console.log(`Este é um exemplo de ${string} em JS!`);

// Destructuring

//array:

const fruits = ["Limão", "Pera", "Laranja"];

const [f1, f2, f3] = fruits;

console.log(f1);

// object:

const client = {
    name: "Luiz",
    lastName: "Trindade",
    age: "20"
}

const { name: clientName, lastName: clientLastName, age } = client;

console.log(clientName + clientLastName);

// Spread operator

let array1 = [1, 2, 3, 4];
let array2 = [0, ...array1];

console.log(array2);

// class

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const tshirt = new Product("T-Shirt", 100.00);
console.log(tshirt.productWithDiscount(10))

// inheritance

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price);
        this.color = colors;
    }
    showColor() {
        console.log("As cores são:")
        this.color.forEach((colors) => {
            console.log(colors)
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 10.00, ["Blue", "Orange", "Yellow"])

hat.showColor();