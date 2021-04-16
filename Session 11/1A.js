var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe"
}
var person2 = {
    firstName:"Mary",
    lastName: "Doe"
}
console.log(person.fullName.call(person1));


var personObj = {
    fullName: function(age, gender) {
        return this.firstName + "  " + this.lastName + "  " + age + "  " + gender;
    }
}
console.log(personObj.fullName.call(person1, 70, "M"));
console.log(personObj.fullName.apply(person1, [70, "M"]));

console.log("*******************************************");

let user = {
    firstName: 'John'
};

function func() {
    console.log(this.firstName);
}

let funcUser = func.bind(user);
funcUser();

console.log("*******************************************");

let user2 = {
    firstName: "John"
};

function func2(phrase) {
    console.log(phrase + ', ' + this.firstName);
}

let funcUser2 = func2.bind(user2);

funcUser2("Hello");

console.log("*******************************************");


let user3 = {
    firstName: "John",
    sayHi: function() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

console.log(user3.sayHi());
let sayHi = user3.sayHi.bind(user3);
console.log(sayHi());