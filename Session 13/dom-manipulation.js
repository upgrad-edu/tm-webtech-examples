let paragraph = document.createElement("p");
console.log(paragraph);

let text = document.createTextNode("This is a new paragraph");
console.log(text);

paragraph.appendChild(text);

let div = document.getElementById("div-1");
div.appendChild(paragraph);

let newPara = document.createElement("p");
let newText = document.createTextNode("This is paragraph 2");
newPara.appendChild(newText);

let div2 = document.getElementById("div-2");
let p1 = document.getElementById("para-1");
div2.insertBefore(newPara, p1);

let p3 = document.getElementById("para-3");
p3.remove();

let p4 = document.getElementById("para-4");
div2.removeChild(p4);

console.log("/*********** 1B ************/");

p1.style.color = 'red';

console.log("/*********** 1C ************/");

function buttonClicked() {
    let span = document.createElement("span");
    span.appendChild(document.createTextNode("A new text added on button click."));
    div2.appendChild(span);
}

function mouseOver(obj) {
    obj.innerHTML = "Mouse moved over this div.";
}

function mouseOut(obj) {
    obj.innerHTML = "Move your mouse over here."
}

function blurs(obj) {
    obj.value = obj.value.toUpperCase();
}

console.log("/********* 1D *********/");

document.getElementById("button-2").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Hello World";
})