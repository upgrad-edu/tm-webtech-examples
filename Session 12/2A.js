let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });
  
  promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
  });

  
  promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
  });
  
  promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
  });
  
  promise.catch(error => {
    console.log(error);
  })

new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);
  
  }).then(function(result) {
  
    console.log(result); // 1
  
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) { // (**)
  
    console.log(result); // 2
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) {
  
    console.log(result); // 4
  
  });

console.log("/*************/");

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 3000)
    });

    console.log("Whoa!");
    let result = await promise; // wait until the promise resolves (*)
    console.log("Hello there");

    console.log(result); // "done!"
}

f();