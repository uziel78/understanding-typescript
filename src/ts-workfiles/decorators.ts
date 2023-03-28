// ---------- DECORATORS ---------- //

// Decorators is a feature that can be very useful for meta-programming.
// Useful for other developers, as opp osed to the end user.
// decorators are in general all about classes

// ---------- A FIRST CLASS DECORATOR ---------- //

// // decorator added to a class as a whole:

// // decorator is a function (function name starts with a capital character)
// // decorator runs when javacscript finds class definition/constructor function, NOT when constructor function is used.
// function Logger(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor);
// }

// //@Logger points to decorator function above
// @Logger
// class Person {
//   name = 'Max';

//   constructor() {
//     console.log('Creating a Person object...');
//   }
// }

// const pers = new Person();

// console.log(pers);

// ---------- WORKING WITH DECORATOR FACTORIES ---------- //

// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }
// //executes as a function
// @Logger('LOGGING - PERSON')
// class Person {
//   name = 'Max';

//   constructor() {
//     console.log('Creating a Person object...');
//   }
// }

// const pers = new Person();

// console.log(pers);

// ---------- BUILDING MORE USEFUL DECORATORS ---------- //

// // function Logger(logString: string) {
// //   return function (constructor: Function) {
// //     console.log(logString);
// //     console.log(constructor);
// //   };
// // }

// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: any) {
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector('h1')!.textContent = p.name;
//     }
//   };
// }
// //@Logger('LOGGING - PERSON')
// // 'app' is an id assigned to a div...
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person {
//   name = 'Max';

//   constructor() {
//     console.log('Creating a Person object...');
//   }
// }

// const pers = new Person();

// console.log(pers);

// ---------- ADDING MULTIPLE DECORATORS ---------- //

// function Logger(logString: string) {
//   console.log('LOGGER FACTORY');
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// //Decorators render "bottom-up", i.e the last one renders first and so on (applies to the actual functions contained in the decorators)
// function WithTemplate(template: string, hookId: string) {
//   console.log('TEMPLATE FACTORY');
//   return function (constructor: any) {
//     console.log('Rendering template...');
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector('h1')!.textContent = p.name;
//     }
//   };
// }
// @Logger('LOGGING')
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person {
//   name = 'Max';

//   constructor() {
//     console.log('Creating a Person object...');
//   }
// }

// const pers = new Person();

// console.log(pers);

// ---------- DIVING INTO PROPERTY DECORATORS ---------- //

// function Logger(logString: string) {
//   console.log('LOGGER FACTORY');
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log('TEMPLATE FACTORY');
//   return function (constructor: any) {
//     console.log('Rendering template...');
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector('h1')!.textContent = p.name;
//     }
//   };
// }
// @Logger('LOGGING')
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person {
//   name = 'Max';

//   constructor() {
//     console.log('Creating a Person object...');
//   }
// }

// const pers = new Person();

// console.log(pers);

// // new example

// function Log(target: any, propertyName: string | Symbol) {
//   console.log('Property decorator!');
//   console.log(target, propertyName);
// }

// // instasiates when class definition is registered by javascript (i.e title in this case)
// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error('Invalid price - should be positive');
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }
//   getPriceWithTax(tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// ---------- ACCESSOR & PARAMETER DECORATORS ---------- //

// function Log(target: any, propertyName: string | Symbol) {
//   console.log('Property decorator!');
//   console.log(target, propertyName);
// }

// // accessor decorator example
// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log('Accessor decorator!');
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// // method decorator example
// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log('Method decorator!');
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// // parameter decorator example
// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log('Property decorator!');
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error('Invalid price - should be positive');
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// ---------- WHEN DO DECORATORS EXECUTE ---------- //

// decorators runs when class is defined, not at runtime when a method is called or property is applied
// decorators are not used as "event listeners

// ---------- RETURNING (AND CHANGING) A CLASS IN A CLASS DECORATOR ---------- //

// function Logger(logString: string) {
//   console.log('LOGGER FACTORY');
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// // below example shows how one can use decorators to make a new class inside the decorator itself
// // allows for logic to be added for when the class is instantiated, as opposed to when defined as normal for classes.
// function WithTemplate(template: string, hookId: string) {
//   console.log('TEMPLATE FACTORY');
//   // turn decorator function into a generic function
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     originalConstructor: T
//   ) {
//     // remember that class is just synthatic sugar for constructor function
//     return class originalConstructor {
//       constructor(..._: any[]) {
//         // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
//         // error?
//         super();
//         console.log('Rendering template...');
//         const hookEl = document.getElementById(hookId);
//         //const p = new originalConstructor();
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           //hookEl.querySelector('h1')!.textContent = p.name;
//           hookEl.querySelector('h1')!.textContent = this.name;
//         }
//       }
//     };
//   };
// }
// @Logger('LOGGING')
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person {
//   name = 'Max';

//   constructor() {
//     console.log('Creating a Person object...');
//   }
// }

// // in this case insantiating will extend and replace the old class
// const pers = new Person();
// console.log(pers);

// ---------- OTHER DECORATOR RETURN TYPES ---------- //

// DECORATORS WHERE YOU CAN RETURN SOMETHING ARE THE DECORATORS ADDED T
//  (@Log2 & @Log3 examples above) and parameters (@Log1 and @Log 4 examples above).

// ---------- CREATING AN "AUTOBIND" DECORATOR ---------- //

// function Autobind(_: any _2: string, descriptor: PropertyDescriptor) {
//     const originalMEthod = descriptor.value;
//     const adjustedDescriptor: PropertyDescriptor = {
//         configurable: true,
//         enumerable: false,
//         // getter method wil lbe triggered by the concrete object to which it belongs
//         get() {
//             const boundFn = originalMEthod.bind(this);
//             return boundFn;
//         },
//     };
//     return adjustedDescriptor;
// }
// class Printer {
//   message = 'This works!';

//   @Autobind
//   showMessage() {
//     console.log(this.message);
//   }
// }

// const p = new Printer();

// const button = document.querySelector('button')!;
// // returns undefined as "this" is her bound to addEventlistener and not class
// // button.addEventListener('click', p.showMessage);
// // bind fix that works by default:
// // button.addEventListener('click', p.showMessage.bind(p));

// button.addEventListener('click', p.showMessage)

// ---------- VALIDATION WITH DECORATORS - FIRST STEPS ---------- //

// // validation decorators:

// function Required() {}

// function PositiveNumber() {}

// function validate(obj: object) {}
// class Course {
//   @Required
//   title: string;
//   @PositiveNumber
//   price: number;

//   constructor(t: string, p: number) {
//     this.title = t;
//     this.price = p;
//   }
// }

// const courseForm = document.querySelector('form')!;
// courseForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const titleEl = document.getElementById('title') as HTMLInputElement;
//   const priceEl = document.getElementById('price') as HTMLInputElement;

//   const title = titleEl.value;
//   const price = +priceEl.value;

//   const createdCourse = new Course(title, price);
//   if (!validate(createdCourse)) {
//     alert('Invalid input, please try again!');
//     return;
//   };
//   console.log(createdCourse);
// });

// ---------- VALIDATION WITH DECORATORS - FINISHED ---------- //

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // example: ['redquired', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required'],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive'],
  };
}

function validate(obj: any) {
  const objeValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objeValidatorConfig) {
    return true;
  }

  let isValid = true;

  for (const prop in objeValidatorConfig) {
    //console.log(prop);
    for (const validator of objeValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          // double bang operator (!!)
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}
class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }
  console.log(createdCourse);
});
// ---------- WORKING WITH DECORATOR FACTORIES ---------- //
// ---------- WORKING WITH DECORATOR FACTORIES ---------- //
