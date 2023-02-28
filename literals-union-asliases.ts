// UNIONS EXAMPLE //
// Unions can be used to give some flexibility of Types

// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number') {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 26);
// console.log(combinedAges);

// const combinedNames = combine('Max', 'Anna');
// console.log(combinedNames);

// LITERAL TYPES  EXAMPLE 1 //
//

// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: string
// ) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number') {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   if (resultConversion == 'as-number') {
//     return +result;
//   } else {
//     return result.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges);

// const combinedStringAges = combine('30', '26', 'as-number');
// console.log(combinedStringAges);

// const combinedNames = combine('Max', 'Anna', 'as-text');
// console.log(combinedNames);

// output/log:
// 56
// 3026
//MaxAnna

// LITERAL TYPES EXAMPLE 2 //
// more specific version of core type, more specificity

// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: 'as-number' | 'as-text' // literal types
// ) {
//   let result;
//   if (
//     (typeof input1 === 'number' && typeof input2 === 'number') ||
//     resultConversion === 'as-number'
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges);

// const combinedStringAges = combine('30', '26', 'as-number');
// console.log(combinedStringAges);

// const combinedNames = combine('Max', 'Anna', 'as-text');
// console.log(combinedNames);

// output/log:
// 56
// 56
//MaxAnna

// TYPE ALIASES EXAMPLE //
// type alieases are simple types that can be used to store more complex types (such as literal types)

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

// output/log:
// 56
// 56
//MaxAnna
