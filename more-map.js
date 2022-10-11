const numbers = [12, 56, 87, 44];
const half = numbers.map( n => n/2)
const thirds = numbers.map(x => x/3);
const friends = ['tom Hanks', 'tom cruises', 'tom bady', 'tom solaiman'];
const firstLetters = friends.map(friend => friend [0]);
// console.log(firstLetters);

const nameLenghts = friends.map(friend => friend.length);
// console.log(nameLenghts);

const products = [
    {id:1, name:'laptop', price: 4000},
    {id:2, name:'mobile', price: 63000},
    {id:3, name:'watch', price: 354000},
    {id:4, name:'tablet', price: 23000},
];


// const items = products.map(product => (product.name));
const items = products.map(product => product.name);
const prices = products.map(product => product.price);
console.log(items,prices);