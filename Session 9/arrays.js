let cars = ['BMW', 'Audi', 'Mercedes', 'Lamborghini', 'Ford', 'Jaguar'];
console.log("Element at second position is", cars[1]);
console.log("Element at first position is", cars[0]);
console.log("Element at last position is", cars[cars.length - 1]);
console.log("The length of the cars array is", cars.length);
console.log(cars.sort());
cars.forEach(function(car) {
    console.log(car);
})
console.log("Before pushing a new car,", cars);
cars.push("Nissan");
console.log("After pushing a new car,", cars);
// cars[20] = "Tata";
// console.log(cars);

console.log("////////Array Methods/////////");
console.log(cars.toString());
console.log(cars.join(' | '));
console.log(cars.pop(), cars);
console.log(cars.shift(), cars);
console.log(cars.unshift("Audi"), cars);
cars[1] = "Toyota";
console.log(cars);
// delete cars[1];
// console.log(cars);
console.log("*** Splicing an array changes the array itself. ***");
console.log(cars.splice(1, 2));
console.log(cars);
console.log("**********************");

let cars1 = ["Audi", "BMW", "Nissan", "Mercedes"];
let cars2 = ["Toyota", "Honda", "Tata", "Volkswagon"];
let allCars = cars1.concat(cars2);
console.log(allCars);

console.log("*** Slicing an array does NOT change the array. ***");
console.log(allCars.slice(1, 3));
console.log(allCars.slice(1));
console.log(allCars);
console.log("***************************");
