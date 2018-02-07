//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
const countdownLoop = n => {
  const result = [];
  for (let i = n; i >= 0; i--) {
    result.push(i);
  }
  return result.join(" ");
};
//2. Next, try looping just like above except using recursion
const countdown = n => {
  if (n === 0) {
    return "0";
  } else {
    return n.toString() + " " + countdown(n - 1);
  }
};
//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
const exponentLoop = (base, exp) => {
  let counter = exp;
  let result = 1;
  while (counter > 0) {
    result *= base;
    counter--;
  }
  return result;
};
//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
const recursiveExponent = (base, expo) => {
  if (expo === 0) {
    return 1;
  } else {
    return base * recursiveExponent(base, expo - 1);
  }
};
//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
const recursiveMultiplier = (arr, num) => {
  if (arr.length < 1) {
    return [];
  } else {
    return [arr[0] * num].concat(recursiveMultiplier(arr.slice(1), num));
  }
};
//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
const recursiveReverse = arr => {
  if (arr.length < 1) {
    return [];
  } else {
    return [arr[arr.length - 1]].concat(
      recursiveReverse(arr.slice(0, arr.length - 1))
    );
  }
};

console.log("===== countdownLoop test =====");
console.log(countdownLoop(5));
console.log("===== Countdown test =====");
console.log(countdown(5));
console.log("===== exponentLoop test =====");
console.log(exponentLoop(2, 4));
console.log("===== recursiveExponent test =====");
console.log(recursiveExponent(2, 4));
console.log("===== recursiveMultiplier test =====");
console.log(recursiveMultiplier([1, 2, 3, 4, 5], 2));
console.log("===== recursiveReverse test =====");
console.log(recursiveReverse([1, 2, 3, 4, 5]));
