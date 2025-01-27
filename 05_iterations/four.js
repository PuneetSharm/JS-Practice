const myObj = {
    js : "javascript",
    cpp : 'C++',
    rb: "ruby",
    swift : "swift by apple"
}

for (const key in myObj) {
//    console.log(myObj[key]);
   console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ['cpp','js', 'py', 'java'];
for (const key in programming) {
  console.log(programming[key]);
}