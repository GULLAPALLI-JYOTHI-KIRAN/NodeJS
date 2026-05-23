/* async-await keyword */

function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function asyncCode(name) {
  await delayFn(2000);

  console.log(name);
}

asyncCode("John Deo");

async function Divisble(n1, n2) {
  try {
    if (n2 == 0) throw new Error("Cann't divisble by zero");
    return n1 / n2;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function mainFn() {
  console.log(await Divisble(20, 0));

  console.log(await Divisble(20, 10));
}

mainFn();
