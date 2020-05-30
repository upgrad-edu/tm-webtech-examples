let element1 = document.getElementById("para-1");
console.log(element1);

let element2 = document.getElementsByClassName("para-2");
console.log(element2);

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

let span = document.getElementsByTagName("span");
console.log(span);

console.log(document.querySelector("#para-1"));
console.log(document.querySelector(".para-2"));
console.log(document.querySelector("p"));
console.log(document.querySelectorAll("p"));

console.log(window);
console.log(window.location);
console.log(window.navigator);