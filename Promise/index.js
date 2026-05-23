/* Promise are as Js Promise */

function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log("Promise Concept Started.");

delayFn(2000).then(() => {
  console.log("Runs after 2sec");
});
console.log("end");

function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 == 0) {
      reject("0/0 is not possible here");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(0, 0)
  .then((result) => {
    console.log("Divided Result", result);
  })
  .catch((err) => {
    console.log(err);
  });
divideFn(0, 10)
  .then((result) => {
    console.log("Divided Result", result);
  })
  .catch((err) => {
    console.log(err);
  });
