// ---------- INTERSECTION TYPES ---------- //

// //Intersection types allow us to combine other types.

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// //new object type that must contain both the above
// //unlike Interfaces, Intersection types can be used to combine more than just obbject types
// type ElevatedEmployee = Admin & Employee;

// //
// const e1: ElevatedEmployee = {
//   name: 'Dilbert',
//   privileges: ['create-server'],
//   startDate: new Date(),
// };

// //console.log(e1);

// //example of different types (non objects) being combine using Intersection types.
// //runs and compiles without errors in console.
// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// ---------- TYPE GUARDS ---------- //

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// //
// const e1: ElevatedEmployee = {
//   name: 'Dilbert',
//   privileges: ['create-server'],
//   startDate: new Date(),
// };

// //console.log(e1);

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// // TYPE GUARD EXAMPLE 1
// function add(a: Combinable, b: Combinable) {
//   //typeguard example in if statement using typeof
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// //TYPE GUARD EXAMPLE 2
// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   //works as both Employee and admin has a name property
//   console.log('Name: ' + emp.name);
//   //since javascript cannot check our types et runtime, "in" is a property on employee
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('Start Date: ' + emp.startDate);
//   }
// }

// //printes everything to console
// printEmployeeInformation(e1);

// //works becasue of the if check in fucntion above
// printEmployeeInformation({ name: 'Manu', startDate: new Date() });

// //TYPE GUARD EXAMPLE 3

// //when working with classes, ther is another type guard, the instance of
// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a truck...');
//   }
//   loadCargo(amount: number) {
//     console.log('Loading Cargo ' + amount);
//   }
// }

// //union type
// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   //type guard instanceof used on method in class (instance of is a normal javascript operator and will therefore work at runtime)
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// ---------- DISCRIMINATED UNIONS ---------- //

// //a pattern when working with unitons that makes unions easier (available when working with object types)

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// //
// const e1: ElevatedEmployee = {
//   name: 'Dilbert',
//   privileges: ['create-server'],
//   startDate: new Date(),
// };

// //console.log(e1);

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// // TYPE GUARD EXAMPLE 1
// function add(a: Combinable, b: Combinable) {
//   //typeguard example in if statement using typeof
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// //TYPE GUARD EXAMPLE 2
// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   //works as both Employee and admin has a name property
//   console.log('Name: ' + emp.name);
//   //since javascript cannot check our types et runtime, "in" is a property on employee
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('Start Date: ' + emp.startDate);
//   }
// }

// //printes everything to console
// printEmployeeInformation(e1);

// //works becasue of the if check in fucntion above
// printEmployeeInformation({ name: 'Manu', startDate: new Date() });

// //TYPE GUARD EXAMPLE 3

// //when working with classes, ther is another type guard, the instance of
// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a truck...');
//   }
//   loadCargo(amount: number) {
//     console.log('Loading Cargo ' + amount);
//   }
// }

// //union type
// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   //type guard instanceof used on method in class (instance of is a normal javascript operator and will therefore work at runtime)
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// // DISCRIMINTATE UNIONS EXAMPLE
// //one common property is added to every object that makes up the union which describes the object (type in this case)
// //note: some of the above methods are not avilable on interfaces as interfaces are not compiled to javascript
// //a very useful pattern when working with unions and object types

// interface Bird {
//   //type is a literal type, i.e property)
//   type: 'bird';
//   flyingspeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingspeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log('Moving with speed: ' + speed);
// }

// moveAnimal({ type: 'bird', flyingspeed: 10 });

// ---------- TYPE CASTING ---------- //

// Typecasting helps to tell typescript that some value is of some specific type,
// in the case that Typescript is not able to figure it out on its own.
// typescript doesn't read the html code...

//TYPE CASTING EXAMPLE

//typescript can infer that this is an HTMLParagraphElement (or null)
const paragraph1 = document.querySelector('p');

//typescript does not know which specific HTMLElement this is
const paragraph2 = document.getElementById('message-output');

//typescript only infers that this is an HTMLElement OR null
//const userInputElement = document.getElementById('user-input')!;
// <HTMLInputElement> is added before to tell typescript that element following is of type HTMLInputElement (NOT ideal for React/jsx).
// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')!
// );

// another method would be:
const userInputElement = document.getElementById(
  'user-input'
)! as HTMLInputElement;
//error, because possibly null (before '!' added above)
//with exclamation mark above, value does not exists on type HTMLElement
userInputElement.value = 'Hello!';

//note:  '!' tells typescript that the expression in front of it will never yearld null.

// ---------- INDEX TYPES ---------- //

//index types is a feature which allows us to create objects that are a bit more flexible in terms of properties they might hold.

//flexible container:
interface ErrorContainer {
  // example { email: 'not a valid email', username: 'Must start with a character'}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
};

console.log(errorBag);

// ---------- FUNCTION OVERLOADS ---------- //

// a feature that allows us to define multiple fucntion signatures for one and the same function

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//function overload example:
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

//typescript does not know if result is number or string:
//const result = add(1, 5);

//still combinable (string or number), so string functions cannot be called on result (typescript does not know which it holds as it's not runtime)
//const result = add('Max', ' Schwarz');

//fixed, but not optimally:
//const result = add('Max', ' Schwarz') as string;

//reslut is now of type string due to function overload above
const result = add('Max', ' Schwarz');
result.split(' ');
console.log(result);

// ---------- OPTIONAL CHAINING ---------- //

//useful when you're getting an object from a database/PAI wher you're unsure if a certain property is defined.

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  //job: { title: 'CEO', description: 'My own company' },
};

//if job does not exist, then job.title is never checked for (avoids runtime error if job does not exist and instead returns undefined)
//javascript solution
//console.log(fetchedUserData.job && fetchedUserData.job.title);

//tyepscript solution with chaining operator
console.log(fetchedUserData?.job?.title);

// ---------- NULLISH COALESCHING ---------- //

//helps deal with nullish data, especially if you're unsure if data type is null, undefined, etc

//could be data from API one is unsure of, but hardcoded here
const userInput = '';

// if unserInput is "falsy" then becomes 'DEFAULT' (downside is that it triggers on empty strings on imput etc)
//const storedData = userInput || 'DEFAULT';
//console.log(storedData);

//fixed with the Nullish Coalescing operator (fallback only applies if userInput is null or undefined):
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);
