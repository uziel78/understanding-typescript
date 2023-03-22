// ---------- INTERFACE --------- //

//interfaces can are used to describe what an object should look like
//used to typecheck objects

// interface Person {
//   name: string;
//   age: number;

//   //method example
//   greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//   name: 'Max',
//   age: 25,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

// user1.greet('Hi there - I am');

// ---------- USING INTERFACES WITH CLASSES ---------- //

// interface Greetable {
//   //readonly can be used inside of an interface. public or private cannot be used
//   readonly name: string;
//   greet(phrase: string): void;
// }

// // makes a contract of one or more interfaces to be tied to a class (separated by commas)
// class Person implements Greetable {
//   name: string;
//   age = 30;

//   constructor(n: string) {
//     this.name = n;
//   }

//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// }

// let user1: Greetable;

// user1 = new Person('Dilbert');
// //user1.name = 'Manu';

// user1.greet('Hi there - I am');
// console.log(user1);

// ---------- EXTENDING INTERFACES ---------- //

//inheritance in interfaces
//some classes below can just have names, while others must have named & greetable combined

// interface Named {
//   readonly name: string;
// }

// //more than one extends can me implemented by adding a comma and chaining (only Named here though)
// interface Greetable extends Named {
//   greet(phrase: string): void;
// }
// class Person implements Greetable {
//   name: string;
//   age = 30;

//   constructor(n: string) {
//     this.name = n;
//   }

//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// }

// let user1: Greetable;

// user1 = new Person('Dilbert');

// user1.greet('Hi there - I am');
// console.log(user1);

// ---------- INTERFACES AS FUNCTION TYPES ---------- //

// // type AddFn = (a: number, b: number) => number;
// interface AddFn {
//   (a: number, b: number): number;
// }

// let add: AddFn;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// interface Named {
//   readonly name: string;
// }

// interface Greetable extends Named {
//   greet(phrase: string): void;
// }
// class Person implements Greetable {
//   name: string;
//   age = 30;

//   constructor(n: string) {
//     this.name = n;
//   }

//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// }

// let user1: Greetable;

// user1 = new Person('Dilbert');

// user1.greet('Hi there - I am');
// console.log(user1);

// ---------- OPTIONAL PARAMETERS & PROPERTIES ---------- //

//optional properties added. Can also apply to methods.
//optional properties can be used in interfaces, classes and constructors (methods)
interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}
class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    //if check needed if name is optional
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    //changed so that name is not replaced with undefined.
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

let user1: Greetable;

user1 = new Person();

user1.greet('Hi there - I am');
console.log(user1);
