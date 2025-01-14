let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2023, 0 , 23); //months start from 0 in js
// let myCreatedDate = new Date(2023, 6, 22, 15, 23);
// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)) // converting it into seconds and used floor to avoid decimals
// console.log(myDate.getMonth()+ 1);
// console.log(myDate.getFullYear());
console.log(myDate.toLocaleString('default', {
    weekday: 'long',
}))