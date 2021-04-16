console.log("////////////////strings.js///////////////");

var str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(str1.length);

var str2 = "Hi, we are reporting from the city of New York.";
console.log(str2.indexOf("New"));
console.log(str2.indexOf("New", 20));

var str3 = "She said that she is not going to work and she is sad.";
console.log(str3.lastIndexOf("she"));

var str4 = "John Lennon is a musician.";
console.log(str4.indexOf("Ed"));

var str5 = "BMW, Audi, Mercedes";
console.log(str5.slice(7, 13));
console.log(str5.slice(-14, -10));
console.log(str5.slice(5));
console.log(str5.slice(-10));
console.log(str5.substring(5, 9));
console.log(str5.substr(5, 4));
console.log(str5.substr(5));
console.log(str5.replace("Audi", "Lamborghini"));

console.log(str3.replace("she", "he"));
console.log(str3.replace(/she/i, "he"));
console.log(str3.replace(/she/g, "he"));

var str6 = "Hello, how are you?";
console.log(str6.toUpperCase());
console.log(str6.toLowerCase());

var str7 = "Hello";
var str8 = "World";
console.log(str7.concat(str8));

var str8 = "   Hello World   ";
console.log("Before trimming str8 is  ", str8, " and its length is ", str8.length);
console.log("Before trimming str8 is  ", str8.trim(), " and its length is ", str8.trim().length);

var str9 = "Hello World";
console.log(str9.charAt(4));
console.log(str9[0]);