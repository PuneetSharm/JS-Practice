const score =400;
const balance = new Number(100);
// console.log(balance);
// console.log(score);
// console.log(balance.toString());
// console.log(balance.toFixed(2)); //especially when making e-commerce

const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3));

const anotherNumber = 112123.89;
// console.log(anotherNumber.toPrecision(4));
// console.log(anotherNumber.toLocaleString("en-IN"));

/********************Maths***************/
// console.log(Math);
// console.log(Math.abs(-44));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); //will always take higher value..In here 5
// console.log(Math.floor(4.9)); //will always take the lower value..In here 4
// console.log(Math.min(4,5,1,7,88,0.2));
// console.log(Math.max(1.23, 3,"3",6));

// console.log(Math.random());
// console.log((Math.random()*10)+1);
const max=6;
const min=1;
console.log(Math.floor(Math.random()*(max-min + 1))+min)