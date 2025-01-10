let string1 = "hello" + "world";
// console.log(`Hello my name is ${string1}`);

//new way to declare a string

const str = new String("Puneet"); //to get the detailed object try in console
// console.log(str.__proto__);
// console.log(str.charAt(5));
// console.log(str.indexOf('u'));
// console.log(str[0]);
// console.log(str.toUpperCase());
const newString = str.substring(0,4);
// console.log(newString);
const anotherString = str.slice(-8,4);
// console.log(anotherString);
const ekString = "  Puneet  ";
// console.log(ekString.trim());
const url = "https://Puneet.com/Puneet%20Sharma";
// console.log(url.replace("Puneet","sharma"));
// console.log(str.includes('un'));
console.log(url.split('.'));