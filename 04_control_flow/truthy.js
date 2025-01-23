const userEmail = "h@puneet.ai"; // this is truthy value as we have assumed
const userEmail1 = ""; //this is a falsy value
const userEmail2 = [];
if(userEmail) {
    console.log("Got the user email");
}
else {
    console.log("Don't have user email");
}

//falsy values
// false, 0, "", -0, BigInt - 0n, null,undefined,NaN
// truthy values
// "0", 'false'," ", [], {}, function(){}

// if(userEmail.length=== 0){
//     console.log("Empty object");
// }

// const emptyObj = {};
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 12;
// val1 = null ?? 10 ?? 15;

console.log(val1);

