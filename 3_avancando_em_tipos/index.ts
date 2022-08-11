// array number

const numbers: number[] = [6, 54, 4];

numbers.push(1, 10);

numbers.forEach((number) => console.log(number));

const nums: Array<number> = [...numbers];

// array string

const names: string[] = ["João", "Marcela"];

names.push("Cláudia", "Carlos");

names.forEach((name) => console.log(name));

const nams: Array<string> = [...names];

// array any

const array: any = [
  "Eduardo",
  18,
  ["JS", "CSS", "HTML"],
  { idade: 18, serie: "3º ano" },
];

// parameters and return

function soma(a: number, b: number): number {
  return a + b;
}

console.log(soma(4, 10));

// objects

type pessoa = {
  name: string;
  nickname?: string;
  age: number;
};

const pessoa: pessoa = { name: "Eduardo", age: 18 };

// optional parameters

function showNumbers(a: number, b: number, c?: number) {
  console.log("A: ", a);
  console.log("B: ", b);
  c != undefined ? console.log("C: ", c) : null;
}

showNumbers(7, 1, 0);

function greetings(firstName: string, lastName?: string) {
  console.log(
    `Seja bem vindo ${firstName} ${lastName != undefined ? lastName : ""}`
  );
}

greetings("Eduardo", "Nascimento");

// union type
function showBalance(balance: number | string) {
  console.log(`Saldo da conta: R$${balance},00`);
}

showBalance(300);
showBalance("300");

function showUserRole(role: boolean | string): string {
  if (!role) return "Usuário inexistente";
  return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Desenvolvedor Frontend"));

// type alias

type id = string | number;

function showId(id: id) {
  console.log(`Id: ${id}`);
}

showId(1);
showId("1");

// interface

interface Coordinates {
  x: number;
  y: number;
  z: number;
}

const coord: Coordinates = {
  x: 122,
  y: 412,
  z: 2,
};

function showCoordinates(coordinate: Coordinates) {
  console.log(`X: ${coordinate.x}\nY: ${coordinate.y}\nZ: ${coordinate.z}`);
}

showCoordinates(coord);

// inteface x type alias

interface person {
  name: string;
}

interface person {
  age: number;
}

const Eduardo: person = { age: 18, name: "Eduardo" };

type personType = {
  name: string;
};

/* type personType = {
    age: string;
   }; */

// literal types

let enviroment: "production" | "development";

/* enviroment = "jungle" */

enviroment = "production";

// Non-null assertion operator

const title = document.querySelector("title");

console.log(title!.innerText);

// bigint

let num: bigint = 1000000000n;

console.log(num);
console.log(typeof num);

// symbol

const symbolA: symbol = Symbol("Eduardo");
const symbolB: symbol = Symbol("Eduardo");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
