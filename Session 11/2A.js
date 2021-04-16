console.log("/****** let ******/");
let x = 10;
console.log(x);
{
    let x = 2;
    console.log(x);
}
console.log(x);

console.log("/****** var ******/");

var y = 10;
console.log(y);
{
    var y = 2;
    console.log(y);
}
console.log(y);

console.log("/****** const ******/");

var z = 10;
console.log(z);
{
    const z = 2;
    console.log(z);
}
console.log(z);

const PI = 3.14;
try {
    PI = 3.24;
} 
catch(err) {
    console.log(err);
}
console.log(PI);

const person = {name: "John Doe", age: 27, eyeColor: "blue"};
console.log(person);
person.eyeColor = "gray";
console.log(person);
person.language = "English";
console.log(person);
try {
    person = {name: "Jane Doe", age: 25, eyeColor: "black"};
}
catch(error) {
    console.log(error);
}

console.log("/***** Arrow Functions *****/");
var sum = function add(x=2, y=3) {
    return x+y;
}
console.log(sum());

const sum2 = (x, y) => {return x+y;}
console.log(sum2(2, 3));
