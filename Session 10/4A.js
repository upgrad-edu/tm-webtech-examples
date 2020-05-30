function makeAdder(x) {
    console.log("x:", x);
    return function(y) {
        console.log("y:", y);
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));