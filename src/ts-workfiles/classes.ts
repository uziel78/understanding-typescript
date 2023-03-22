// -------- INTRODUCING CLASSES --------- //

// class Department {
//   name: string;

//   //constructor is a method/function that is initialized an object tied to the class is created
//   constructor(n: string) {
//     this.name = n;
//   }
// }

// //constructor is executed like this:
// const accounting = new Department('Accounting');

// //shows Department {name: "Accounting"}
// console.log(accounting);

// ---------- CONSTRUCTOR FUNCTIONS & THE THIS KEYWORD ---------- //

// class Department {
//   name: string;

//   constructor(n: string) {
//     this.name = n;
//   }

//   //method with this, making it refer to the class that it describes
//   describe(this: Department) {
//     console.log('Department ' + this.name);
//   }
// }

// const accounting = new Department('Accounting');

// //console.logs (Department: Accounting)
// accounting.describe();

// //will only work if this: Depatment is added as a parameter to method above and name property added
// const accountingCopy = { name: 'Dummy', describe: accounting.describe };
// //console.logs: "Deparment Dummy"
// accountingCopy.describe();

// ---------- PRIVATE & PUBLIC ACCESS MODIFIERS ---------- //

// class Department {
//   name: string;
//   private employees: string[] = [];

//   constructor(n: string) {
//     this.name = n;
//   }

//   describe(this: Department) {
//     console.log('Department ' + this.name);
//   }

//   //method to add employee to employees array
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// const accounting = new Department('Accounting');

// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');

// //alternative ways like this (not degined inside the class) should be avoided, so employees should be set to a private property/frield above (private keyword)
// //accounting.employees[2] = 'Anna';

// accounting.describe();
// accounting.printEmployeeInformation();

// ---------- SHORTHAND INITIALIZATION  & READONLY --------- //

// class Department {
//   private employees: string[] = [];

//   //shorthand initialization of class paramaters (readonly prevents further change after initialization)
//   constructor(private readonly id: string, public name: string) {
//     //this.name = n;
//   }

//   describe(this: Department) {
//     console.log(`Department (${this.id}: ${this.name})`);
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// const accounting = new Department('d1', 'Accounting');

// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');

// accounting.describe();
// accounting.printEmployeeInformation();

// ---------- INHERITANCE--------- //

// class Department {
//   private employees: string[] = [];

//   constructor(private readonly id: string, public name: string) {}

//   describe(this: Department) {
//     console.log(`Department (${this.id}: ${this.name})`);
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// // IT Deparments inherits Department class (including the constructor)
// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     //super is used to call the constructor of the base class (ie. Department) when ther are two constructors being used.
//     //super takes the arguments of the base/parent class constructor, "id" is passed to super from constructor here and name is set to IT
//     //super MUST be called before doing anything with the this keyword
//     super(id, 'IT');
//     this.admins = admins;
//   }
// }

// class AccountingDepartment extends Department {
//   constructor(id: string, private reports: string[]) {
//     super(id, 'Accounting');
//   }
//   addReport(text: string) {
//     this.reports.push(text);
//   }

//   printReports() {
//     console.log(this.reports);
//   }
// }

// //Max added in the admins array
// const it = new ITDepartment('d1', ['Max']);

// it.addEmployee('Max');
// it.addEmployee('Manu');

// it.describe();
// it.name = 'NEW NAME';
// it.printEmployeeInformation();
// console.log(it);

// const accounting = new AccountingDepartment('d2', []);
// accounting.addReport('Something went wrong...');
// accounting.printReports();
// //console.log(accounting);

// ---------- INHERITANCE, Overriding Properties and the "protected" Modifier --------- //

// class Department {
//   //changed to protected class to allow access to property for children classes
//   protected employees: string[] = [];

//   constructor(private readonly id: string, public name: string) {}

//   describe(this: Department) {
//     console.log(`Department (${this.id}: ${this.name})`);
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, 'IT');
//     this.admins = admins;
//   }
// }

// class AccountingDepartment extends Department {
//   constructor(id: string, private reports: string[]) {
//     super(id, 'Accounting');
//   }

//   //override methods of base/pernet  class in new class
//   addEmplotee(name: string) {
//     //Max not suitable for the job in example
//     if (name === 'Max') {
//       return;
//     }
//     this.employees.push(name);
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//   }

//   printReports() {
//     console.log(this.reports);
//   }
// }
// const it = new ITDepartment('d1', ['Max']);

// it.addEmployee('Max');
// it.addEmployee('Manu');

// it.describe();
// it.name = 'NEW NAME';
// it.printEmployeeInformation();
// console.log(it);

// const accounting = new AccountingDepartment('d2', []);
// accounting.addReport('Something went wrong...');
// accounting.addEmplotee('Max');
// accounting.addEmplotee('Manu');
// accounting.printReports();
// accounting.printEmployeeInformation();

// ---------- Getters and Setters --------- //

// class Department {
//   protected employees: string[] = [];

//   constructor(private readonly id: string, public name: string) {}

//   describe(this: Department) {
//     console.log(`Department (${this.id}: ${this.name})`);
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, 'IT');
//     this.admins = admins;
//   }
// }

// class AccountingDepartment extends Department {
//   //initialize a private last report property
//   private lastReport: string;

//   //getter added to allow access to private property lastReport from outside of class. Method has to return some value.
//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error('No report found.');
//   }

//   //se get above
//   set mostRecentReport(value: string) {
//     if (!value) {
//       throw new Error('Please pass ina valid value!');
//     }
//     this.addReport(value);
//   }

//   constructor(id: string, private reports: string[]) {
//     super(id, 'Accounting');
//     //set lastReport to first report in reeports array
//     this.lastReport = reports[0];
//   }

//   addEmplotee(name: string) {
//     if (name === 'Max') {
//       return;
//     }
//     this.employees.push(name);
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//     //add lastReport text to reports
//     this.lastReport = text;
//   }

//   printReports() {
//     console.log(this.reports);
//   }
// }
// const it = new ITDepartment('d1', ['Max']);

// it.addEmployee('Max');
// it.addEmployee('Manu');

// it.describe();
// it.name = 'NEW NAME';
// it.printEmployeeInformation();
// console.log(it);

// const accounting = new AccountingDepartment('d2', []);

// //use setter to add last report
// accounting.mostRecentReport = 'Year End Report.';

// accounting.addReport('Something went wrong...');

// console.log(accounting.mostRecentReport);

// accounting.addEmplotee('Max');
// accounting.addEmplotee('Manu');
// accounting.printReports();
// accounting.printEmployeeInformation();

// ---------- STATIC METHODS & PROPERTIES --------- //

// class Department {
//   static fiscalYear = 2020;
//   protected employees: string[] = [];

//   constructor(private readonly id: string, public name: string) {}

//   describe(this: Department) {
//     console.log(`Department (${this.id}: ${this.name})`);
//   }

//   //static method which allows us to access the motheod without instanciating this class
//   static createEmployee(name: string) {
//     return { name: name };
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, 'IT');
//     this.admins = admins;
//   }
// }

// class AccountingDepartment extends Department {
//   private lastReport: string;

//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error('No report found.');
//   }

//   set mostRecentReport(value: string) {
//     if (!value) {
//       throw new Error('Please pass ina valid value!');
//     }
//     this.addReport(value);
//   }

//   constructor(id: string, private reports: string[]) {
//     super(id, 'Accounting');
//     this.lastReport = reports[0];
//   }

//   addEmplotee(name: string) {
//     if (name === 'Max') {
//       return;
//     }
//     this.employees.push(name);
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }

//   printReports() {
//     console.log(this.reports);
//   }
// }

// //accessing static method inside of class to add employee (also cannot be accessed from within methods inside classes with the this keyword)
// const employee1 = Department.createEmployee('Max');
// console.log(employee1, Department.fiscalYear);

// const it = new ITDepartment('d1', ['Max']);

// it.addEmployee('Max');
// it.addEmployee('Manu');

// it.describe();
// it.name = 'NEW NAME';
// it.printEmployeeInformation();
// console.log(it);

// const accounting = new AccountingDepartment('d2', []);

// accounting.mostRecentReport = 'Year End Report.';

// accounting.addReport('Something went wrong...');

// console.log(accounting.mostRecentReport);

// accounting.addEmplotee('Max');
// accounting.addEmplotee('Manu');
// accounting.printReports();
// accounting.printEmployeeInformation();

// ---------- ABSTRACT CLASSES --------- //

//use when you want a specific method from a base class to be avilable to any class,
// but also at the same time be implemented differently differently depending upon each inherited class...

//if any method in a class has abstract added, then the paren class must have it as well
// abstract class Department {
//   static fiscalYear = 2020;
//   protected employees: string[] = [];

//   constructor(protected readonly id: string, public name: string) {}

//   //empty method implemented in base class (can be over-written in inherited classes). Curly braces removed and type set to Void.
//   abstract describe(this: Department): void;

//   static createEmployee(name: string) {
//     return { name: name };
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, 'IT');
//     this.admins = admins;
//   }
//   //inherited implementation
//   describe() {
//     console.log('IT Department - ID: ' + this.id);
//   }
// }

// class AccountingDepartment extends Department {
//   private lastReport: string;

//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error('No report found.');
//   }

//   set mostRecentReport(value: string) {
//     if (!value) {
//       throw new Error('Please pass ina valid value!');
//     }
//     this.addReport(value);
//   }

//   constructor(id: string, private reports: string[]) {
//     super(id, 'Accounting');
//     this.lastReport = reports[0];
//   }

//   //inherited implementation
//   describe() {
//     console.log('Accounting Department - ID: ' + this.id);
//   }

//   addEmplotee(name: string) {
//     if (name === 'Max') {
//       return;
//     }
//     this.employees.push(name);
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }

//   printReports() {
//     console.log(this.reports);
//   }
// }

// const employee1 = Department.createEmployee('Max');
// console.log(employee1, Department.fiscalYear);

// const it = new ITDepartment('d1', ['Max']);

// it.addEmployee('Max');
// it.addEmployee('Manu');

// it.describe();
// it.name = 'NEW NAME';
// it.printEmployeeInformation();
// console.log(it);

// const accounting = new AccountingDepartment('d2', []);

// accounting.mostRecentReport = 'Year End Report.';

// accounting.addReport('Something went wrong...');

// console.log(accounting.mostRecentReport);

// accounting.addEmplotee('Max');
// accounting.addEmplotee('Manu');
// accounting.describe();
// // accounting.printReports();
// // accounting.printEmployeeInformation();

// ---------- SINGLETONS & PRIVATE CONSTRUCTORS --------- //

//singletons is the idea that one only has a single object based on one class.

abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  abstract describe(this: Department): void;

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  //private instance property of type AccountingDepartment (value)
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass ina valid value!');
    }
    this.addReport(value);
  }

  //private class added to limit it to just one instance (prevents "new" bein used as it's only accessible inside the class)
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  //will check if an instance of this class already exists or not
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmplotee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);

//const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = 'Year End Report.';

accounting.addReport('Something went wrong...');

//console.log(accounting.mostRecentReport);

accounting.addEmplotee('Max');
accounting.addEmplotee('Manu');
accounting.describe();
// accounting.printReports();
// accounting.printEmployeeInformation();
