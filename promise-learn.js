// Normal Way
const promiseOne = new Promise(function (resolve, reject) {
  // Do Any Async Task
  setTimeout(function () {
    console.log("Async Task");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

// Shorthand Way
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 Resolved");
});

// Data Passing in Then
const promiseThree = new Promise(function (resolve, reject) {
  var a = { username: "Ankit", email: "chai@ymail.com" };
  // var a = 5;
  setTimeout(function () {
    resolve(a);
  }, 1000);
});
promiseThree.then(function (a) {
  console.log(a);
});

// Data Passing in Then
// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve({username:"Ankit",email:"chai@ymail.com"});
//     }, 1000);
//   });
//   promiseThree.then(function (a) {
//     console.log(a);
//   });

// rejct case handling
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Ankit", password: "abc" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// passing value from one then to another then called chaining
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log("username", username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise either resolved or Rejected");
  });

// handle promise using async
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// fetch using async
// async function getAllUsers() {
//   try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/users');
//     const data=await response.json();
//     console.log("getAllUsers",data);
//   } catch (error) {
//     console.log("Error",error);
//   }
// }

// getAllUsers()

// fetch using .then
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
