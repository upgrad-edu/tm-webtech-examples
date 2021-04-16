function check() {
    let element = document.getElementById("demo");
    let value = element.value;
    let message;

    try {
        if(value == "") throw "User has not typed anything."
        if(value > 5) throw "Number is too high."
        if(value < 2) throw "Number is too low."
    }
    catch(err) {
        message = "ERROR: " + err;
    }
    finally {
        if(message === undefined) message = "User entered " + value;
        alert(message);
    }
}


let num = 500;
// console.log(num.toFixed(5000000000)); //Example of RangeError
// console.log(y); //Example of ReferenceError
// alert('Hello); //Example of SyntaxError
// console.log(num.replace('he', 'she')); //Example of TypeError

