localStorage.setItem("name", "John Doe");
localStorage.age = 27;

document.getElementById('text-1').innerHTML = localStorage.getItem('name');
document.getElementById('text-2').innerHTML = localStorage.age;

function removeAge() {
    localStorage.removeItem('age');
}

if(localStorage.counter) {
    document.getElementById('counterValue').innerHTML = localStorage.counter;
} else {
    document.getElementById('counterValue').innerHTML = 0;
}

function increaseCounter() {
    if(!localStorage.counter) {
        localStorage.counter = 1;
    } else {
        localStorage.counter = parseInt(localStorage.counter) + 1;
    }
    document.getElementById('counterValue').innerHTML = localStorage.counter;
}

if(sessionStorage.counter) {
    document.getElementById('counterValueSession').innerHTML = sessionStorage.counter;
} else {
    document.getElementById('counterValueSession').innerHTML = 0;
}

function increaseSessionCounter() {
    if(!sessionStorage.counter) {
        sessionStorage.counter = 1;
    } else {
        sessionStorage.counter = parseInt(sessionStorage.counter) + 1;
    }
    document.getElementById('counterValueSession').innerHTML = sessionStorage.counter;
}