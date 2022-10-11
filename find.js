const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1, 85, 45, 45, 78, 754,];

const fives = numbers.find(num => num % 5 ===0);
// console.log(fives);



const products = [
    {id:1, name:'laptop', price: 4000},
    {id:2, name:'mobile', price: 63000},
    {id:3, name:'watch', price: 354000},
    {id:4, name:'tablet', price: 23000},
];

const cheap = products.find(product => product.price < 50000);
console.log(cheap) 