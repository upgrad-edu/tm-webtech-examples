// function add(x, y) {console.log(x+y);}
// add(1, 2); //3

// add(1, 2);
// function add(x, y) {console.log(x+y);} //3

// var add;
// add(1, 2);  //Uncaught TypeError: add is not a function

add(1, 2);
var add = function(x, y) {console.log(x + y);}; //Uncaught TypeError: add is not a function"