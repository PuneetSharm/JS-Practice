let array = [0,1,2,3,4,5]; //object, collection of multiple items in a single variable

// these are resizable, can contain a mix of different data types

// console.log(array[3]);

/* 
Shallow copy - a copy whose properties share the same reference 
meaning whatever changes you make reflects in the original array as well
Deep copy - doesn't share the same reference point
*/

let arr = new Array(1,2,3,4,5);
// console.log(arr);

//Array Methods

array.push(100); //adds the value at the end of the array
// console.log(array);

array.pop(); //no arguments removes the last element
// console.log(array);

array.unshift(10); //adds the element in the starting of the array
array.shift(); // removes the 1st element of the array

// console.log(array.includes(4));
// console.log(array.indexOf(10));
// console.log(array.indexOf(3));

let newArr = array.join();
// console.log(array);
// console.log(newArr);
// console.log(typeof(newArr));

// console.log("A ", array);

let myNewArray = array.slice(1,3); // takes the deep copy
// console.log(myNewArray);
// console.log("B", array);

let myNewArray1 = array.splice(1,3); // takes the shallow copy
// console.log(myNewArray1);
// console.log("C", array);