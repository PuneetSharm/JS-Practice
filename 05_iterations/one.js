// for loop
for (let i = 0; i < 10; i++) { //cmd+D for duplicates
    const element = i;
    // console.log(index);
}

for (let i = 2; i <= 10; i++) {
    for (let j = 1; j <=10; j++) {
        const element = i * j;
        // console.log(`${i} * ${j} = ${element}`);  
    }  
}

let myArray = ["Puneet","Batman","Superman"];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

//break and continue

for (let i = 1; i <= 10; i++) {
if (i==5) {
//    console.log("Detected 5");
   break; 
}
// console.log(`The value of i - ${i}`);
}
for (let i = 1; i <= 10; i++) {
if (i==5) {
//    console.log("Detected 5");
   continue; //skips the condition once i.e it will not go out of the loop but doesn't print 5
}
// console.log(`The value of i - ${i}`);
}