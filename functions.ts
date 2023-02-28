// RETURN TYPES AND VOID //

function add(n1: number, n2: number): number {
  return n1 + n2;
}

// Void return type due to no return statement in function
function printResult(num: number) {
  console.log('Result: ' + num);
}

// callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

//returns undefined (is a type in Typescript)
//console.log(printResult(add(5, 12)));

// FUNCTIONS AS TYPES //
// function types allow us to specificy which kind of functions specifically we want to use somewhere

//let combineValues: Function;

// combined function accepts any function that takes any parameters and returns a number
//let combineValues: () => number;

// combined function accepts any function that takes any two numbers and returns a number
let combineValues: (a: number, b: number) => number;

combineValues = add;
//combineValues = printResult;
//combineValues = 5;

console.log(combineValues(8, 8));

// CALLBACK FUNCTION EXAMPLE //

addAndHandle(10, 20, (result) => {
  console.log(result);
});
