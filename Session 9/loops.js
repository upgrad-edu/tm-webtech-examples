for(var i = 0; i < 10; i++) {
    console.log(i);
}

let fruits = ["Apple", "Watermelon", "Pineapple", "Pomegranate"];
for(var i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}
for(var index in fruits) {
    console.log(index);
    console.log(fruits[index]);
}
for(var fruit of fruits) {
    console.log(fruit);
}

let num = 0;
while(num < 10) {
    console.log(num);
    num++;
}

let num2 = 10;
do {
    console.log("Number is ", num2);
    num2--;
}
while(num2 > 0);