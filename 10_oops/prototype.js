let myName = "Puneet     ";
let myCompany = "vectorshift   ";
// console.log(myName.trim().length);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

Object.prototype.puneet = function (){
    console.log(`Puneet is present in all object`);
};

Array.prototype.Puneet = function(){
    console.log(`Puneet is here`);
}

// heroPower.puneet();
// myHeroes.puneet();
// myHeroes.Puneet();

//inheritance

const user = {
    name:'Puneet',
    email:'Puneet@google.com'
}

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
};

Teacher.__proto__ = user;

//modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher); //prototypal inheritance

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

'Shilpa'.trueLength();
myName.trueLength();



