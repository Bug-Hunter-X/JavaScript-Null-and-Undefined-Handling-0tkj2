function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0; //Or throw error or handle as needed
  }

  return a + b; //Or other operations
}
console.log(foo(null,5)); //outputs 0
console.log(foo(5,5)); //outputs 10