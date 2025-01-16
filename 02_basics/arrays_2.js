let myArr = ["Thor", "Puneet","Ironman"];
let myArr1 = ["Superman","Flash","Batman"];

// console.log(myArr.push(myArr1)); // returns the length of the array
// myArr.push(myArr1);
// console.log(myArr);
 let myArr3 = myArr.concat(myArr1); // returns a new array without modifying the existing array
//  console.log(myArr3);

let myArr4 = [...myArr,...myArr1];
// console.log(myArr4);

let myArr5 = [1,2,3,[4,5,6],7 , [6,7, [4,5]]];
let myArr6 = myArr5.flat(Infinity);
// console.log(myArr6);

//When data scraping

// console.log(Array.isArray("Puneet")); //gives boolean when asking about the array
// console.log(Array.from("Puneet")); //creates the array
// console.log(Array.from({name : "Puneet"})); //interesting gives an empty array

let first = 100;
let second = 97;
let third = 90;

console.log(Array.of(first,second,third));
