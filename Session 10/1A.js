var person = {
    firstName: "John",
    lastName: "Doe",
    age: 70,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    address: {
        flat: 101,
        building: "Rose Villa",
        city: "Mumbai"
    }
}

console.log(person);
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person.fullName);
console.log(person.fullName());
console.log(person.address);

person["eyeColor"] = "blue";
console.log(person);

// var car = new Object();
// var car = {};

for(var key in person) {
    console.log(key, ": ", person[key]);
}

var person2 = {};
person2.firstName = "Jim";
person2.lastName = "Moriarty";
person2.age = 52;

// document.getElementById('text-1').innerHTML = person2;
console.log("text1    ", person2);
// document.getElementById('text-2').innerHTML = person2.firstName + "  " + person2.lastName + ", " + person2.age;
console.log("text2    ", person2.firstName + "  " + person2.lastName + ", " + person2.age);
var text = '';
for(var key in person2) {
    text += person2[key] + " ";
}
// document.getElementById('text-3').innerHTML = text;
console.log("text3    ", text);
var person2Array = Object.values(person2);
// document.getElementById('text-4').innerHTML = person2Array;
console.log("text4    ", person2Array);
var person2String = JSON.stringify(person2);
// document.getElementById('text-5').innerHTML = person2String;
console.log("text5    ", person2String);


console.log("/************Object Constructors*************/");
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

var newPerson = new Person("Sylvian", "Dalvatore", 62);
console.log(newPerson);
Person.language = "English";
console.log(newPerson);
Person.prototype.language = "English";
console.log(newPerson.language);

