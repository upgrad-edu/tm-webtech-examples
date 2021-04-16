// Define a function named power which calculates the result of a base raised to the power of an exponent
function power(base, exponent) {
    var result = 1;
    for (var i = 1; i <= exponent; i++) {
        result *= base;
    }
    return result;
}

// Invoke the function with base 2 and exponent 3 passed as arguments
var pow = power(2, 3);

// Print the result (power) of the invoked function
console.log(pow);
