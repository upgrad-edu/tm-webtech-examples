console.log("/********** setTimeout *********/");

setTimeout(function() {
    document.getElementById("text-1").innerHTML = "Hello text 1";
}, 2000)

document.getElementById("text-2").innerHTML = "Hello text 2";

console.log("/*********** callbacks ***********/");

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}

function workFinish() {
    console.log('Finished my homework');
}

doHomework('Maths', workFinish);