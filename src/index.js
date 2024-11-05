//import "./style.css";

const fibs = (number) => {
  const arr = [];
  let old = 0;
  let curr = 1;
  let next = old + curr;
  arr.push(old);
  arr.push(curr);
  arr.push(next);
  for (let i = 3; i < number; i++) {
    old = curr;
    curr = next;
    next = old + curr;
    arr.push(next);
  }
  return arr;
};

const fibsRec = (number) => {
  if (number === 0) {
    return [0];
  } else if (number === 1) {
    return [0, 1];
  } else {
    const arr = fibsRec(number - 1);
    return [...arr, arr[number - 1] + arr[number - 2]];
  }
};

console.log(fibs(8));
console.log(fibsRec(7));
