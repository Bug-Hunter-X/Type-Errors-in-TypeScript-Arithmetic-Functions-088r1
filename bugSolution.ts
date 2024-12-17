function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // Correct
const result2 = subtract(10, 4); // Correct

const result3 = add(5, parseInt("3")); //Fixed: Using parseInt to convert to number
const result4 = subtract(10, parseFloat("4")); //Fixed:Using parseFloat to convert to number
console.log(result1, result2, result3, result4); //Output: 8 6 8 6 