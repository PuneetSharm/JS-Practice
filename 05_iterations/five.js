// for each
const coding = ['js', 'ruby', 'cpp','py', 'java'];

coding.forEach((index) => {
    // console.log(index);
});

function print (item) {
    console.log(item);
}

// coding.forEach(print);

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName : "JS"
    },
    {
        languageName: "Java",
        languageFileName : "java",
    },
    {
        languageName: "Python",
        languageFileName : "py",
    }
];
myCoding.forEach((item) => {
    console.log(item.languageName);
} )