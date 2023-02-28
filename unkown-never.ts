// The UKNOWN TYPE //

// user input may be string, number, etc
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
//error, unknow is not assignable to type string (as type: Any would be)
//userName = userInput;

//this works
if (typeof userInput === 'string') {
  userName = userInput;
}

// THE NEVER TYPE //

//can be thrown by functions
//inferred type is void, but never is correct as fuction does not return anything (throw crashes the script)
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

//generateError('An error ocurred!', 500);

const result = generateError('An error ocurred!', 500);
console.log(result);

// White(true) loops would also be a function that never returns a value due to infinate loop
