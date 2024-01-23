function findFibonacciIndexByLength(len) {
  function fibSequence(n) {
    if (n === 1 || n === 2) return 1;
    return (fibSequence(n - 1) + fibSequence(n - 2))
  }
  let fibNumber = 1
  let index = 1;

  while (String(fibNumber).length !== len) {
    fibNumber = fibSequence(index);
    index += 1;
  }
  return index - 1;
}
console.log(findFibonacciIndexByLength(10));

function findFibonacciIndexByLength2(length) {
  if (length === 1) return 1;
  let fibonacciHold = 0;
  let fibonacciNext = 1;
  let fibonacciNumber = 0
  let index = 1;
  do {
    fibonacciNumber = fibonacciHold + fibonacciNext;
    fibonacciHold = fibonacciNext;
    fibonacciNext = fibonacciNumber;
    index += 1;
  } while(String(fib).length !== length)
  return index
}

console.log(findFibonacciIndexByLength2(2));