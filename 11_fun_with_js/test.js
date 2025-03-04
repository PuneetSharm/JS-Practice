const myArr = [];
// %DebugPrint(myArr)

//continious another name Packed, Holey Array

//SMI (small integer)

//Packed element

//Double (float, sting, function)

const arrTwo = [1,2,3,4,5];
//Packed_SMI_ELEMENTS - this is the default type and recommended
// as it is more optimized

arrTwo.push(6.0); //PACKED_DOUBLE_ELEMENTS

arrTwo.push('7'); //PACKED_ELEMENTS

arrTwo[10] = 11;
//HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]); // these undefined are costly operations

//bound check
//hasOwnProperty(arrTwo, 9)
//hasOwnProperty(arrTwo.prototype, 10)
//hasOwnProperty(Object.prototype, 10) // this hasOwnProperty check is the costly operation

//the above was checked because of Holes. and holes are very expensive in js

const arrThree = [1,2,3,4,5];
console.log(arrThree[2]);

//SMI > Double > PACKED 
//H_SMI > H_DOUBLE > H_PACKED

//if downgraded won't be upgraded

const arrFour = new Array(3);
//just 3 holes - HOLEY_SMI_ELEMENTS

arrFour[0] = '1'; //HOLEY_ELEMENTS
arrFour[1] = '2';
arrFour[2] = '3';

const arrFive = []; //got SMI_ELEMENT
arrFive.push('1');  //PACKED_ELEMENTS
arrFive.push('2');
arrFive.push('3');

const arrSix = [1,2,3,4,5];

arrSix.push(NaN); //PACKED_DOUBLE
arrSix.push(Infinity); //PACKED_DOUBLE

// for, for-of, forEach- use of internal methods because engine has optimized it 


