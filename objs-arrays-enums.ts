// TUPLE EXAMPLE //

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Rune',
//   age: 30,
//   hobbies: ['Sports', 'Cookies'],
//   //tuple example
//   role: [2, 'author'],
// };

//code that could still be run (not ideal inference without role setto tuple)
//person.role.push('admin');
//person.role[1] = 10;

// ENUM EXAMPLE //

//one common way of doing things
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// better way of doing it with enum (admin set to 1, so Read only and author becomes 2 and 3 respectivly)
enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Rune',
  age: 30,
  hobbies: ['Sports', 'Cookies'],
  //enum example
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

if (person.role === Role.AUTHOR) {
  console.log('is author');
}

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   //console.log(hobby.map()); //map does not exist/work on type string
// }
