let obj = {
    name: "John Doe",
    age: 27,
    address: {
        flat: 101,
        building: "Rose Villa",
        city: "Mumbai"
    },
    cars: [
        {
            name: 'Toyota',
            model: 'Corolla'
        },
        {
            name: 'Audi',
            model: 'R8'
        }
    ]
};

console.log(obj);
console.log(JSON.stringify(obj));
localStorage.setItem("user", JSON.stringify(obj));

let user = localStorage.getItem("user");
console.log(JSON.parse(user));