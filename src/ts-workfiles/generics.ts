// ---------- BUILT-IN GENERICS & WHAT ARE GENERICS ---------- //

// // <T> in Typescript means you are dealing with a Generic type

// // generic type <string>
// const names: Array<string> = [];

// // generic type Promise<string> added as a string is expected when resolved
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is Done!');
//   }, 2000);
// });

// ---------- CREATING A GENERIC FUNCTION ---------- //

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// //console.log(merge({ name: 'Max' }, { age: 30 }));

// const mergedObj = merge({ name: 'Max' }, { age: 30 });
// //generic types allows us to access the age property
// console.log(mergedObj.age);

// //can't acccess name or age on merged object
// //mergedObj.age;

// ---------- WORKING WITH CONSTRAINTS ---------- //

// //use extends to constrain generic types

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// //console.log(merge({ name: 'Max' }, { age: 30 }));

// const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
// //generic types allows us to access the age property
// console.log(mergedObj);
// console.log(mergedObj.age);

// ---------- ANOTHER GENERIC FUNCTION ---------- //

// //to help typescript resolve that element has a lenght
// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = 'Got no value.';
//   if (element.length === 1) {
//     descriptionText = 'Got 1 elements.';
//   } else if (element.length > 1) {
//     descriptionText = 'Got ' + element.length + ' elements.';
//   }
//   return [element, descriptionText];
// }

// console.log(countAndDescribe('Hi there!'));

// ---------- THE "KEYOF" CONSTRAINT ---------- //

//keyof used to make sure the key property inside the object is resolved correctly
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

// ---------- GENERIC CLASSES ---------- //

// class DataStorage<T extends string | number | boolean> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   // example not accurate when working with non-primitive values (objects). Indexof fails due to array adress problem
//   //   removeItem(item: T) {
//   //     this.data.splice(this.data.indexOf(item), 1); //returns -1 if it does not find correct value (starts at end of array)
//   //   }

//   // workaround solution (together with maxObj variable below)
//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) {
//       return;
//     }
//     this.data.splice(this.data.indexOf(item), 1); //returns -1 if it does not find correct value (starts at end of array)
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem('Max');
// textStorage.addItem('Manu');
// textStorage.removeItem('Manu');
// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();

// // // removed with extends at Datastorage above
// // const objStorage = new DataStorage<object>();
// // const maxObj = { name: 'Max' };
// // objStorage.addItem(maxObj);
// // objStorage.addItem({ name: 'Manu' });
// // // ...
// // objStorage.removeItem(maxObj);
// // console.log(objStorage.getItems());

// ---------- GENERIC UTILITY TYPES ---------- //

//built-in generic utility types in typescript (some examples):

// PARTIAL TYPE EXAMPLE
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // Partial  type tells typescript that CourseGoal is an object that in the end will hold a Coursegoal,
  // but initially it changes all CourseGoal propterties to optional type.
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  // updated to type CourseGoal (not partial) after data has been added
  return courseGoal as CourseGoal;
}

// READONLY TYPE EXAMPLE

//readonly locks the array
const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();

// note: ther are many more Typescript utility types...

// ---------- GENERIC UTILITY TYPES ---------- //

// info in section 102.
