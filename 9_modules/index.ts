// import default

import exportedFunction from "./exported";

exportedFunction();

// import destructuring

import { myName } from "./exported";

console.log(`Meu nome é ${myName}`);

// import with alias

import { mySurname as lastName } from "./exported";

console.log(`Meu sobrenome é ${lastName}`);

// import all

import * as imports from "./exported";

console.log(imports);

// import types

import { Person } from "./exported";

const Eduardo: Person = {
  name: "Eduardo Melo",
  age: 18,
  job: "Fullstack developer",
  height: 1.83,
};

console.log(Eduardo);
