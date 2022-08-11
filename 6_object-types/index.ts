// tipo de objeto para função com interface

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails({ name, price, isAvailable }: Product): string {
  return `O produto ${name} ${isAvailable ? "" : "não "}está disponível.\n${
    isAvailable ? `Preço: R${price.toFixed(2).replace(".", ",")}` : ""
  }`;
}

const shirt: Product = {
  name: "Camisa",
  price: 80.5,
  isAvailable: false,
};

const pants: Product = {
  name: "Calça",
  price: 70.6,
  isAvailable: true,
};

console.log(showProductDetails(shirt));
console.log(showProductDetails(pants));

// propriedades opcionais em interfaces

interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User): string {
  return `Email: ${user.email} ${user.role ? `Função: ${user.role} ` : ""}`;
}

const user: User = { email: "nascimentomeloedu@gmail.com", role: "admin" };
const user2: User = { email: "2019188020029@ifba.edu.br" };

console.log(showUserDetails(user));
console.log(showUserDetails(user2));

// readonly

interface Car {
  readonly brand: string;
  readonly wheels: number;
}

const pollo: Car = {
  brand: "Volkswagen",
  wheels: 4,
};

// pollo.wheels = 5;

console.log(pollo);

// index signature

interface Coordinates {
  [index: string]: number;
}

const coords: Coordinates = {
  x: 15,
};

coords.y = 73;
coords.z = 8;

// exteding interfaces

interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const Eduardo: Human = {
  name: "Eduardo",
  age: 18,
};

const QueenMaeve: SuperHuman = {
  name: "Maeve",
  age: 30,
  superpowers: ["Super força, Resistência sobrehumana, Velocidade sobrehumana"],
};

// intersection types

interface Character {
  name: string;
}

interface Weapon {
  type: string;
  caliber: bigint;
}

type Heroe = Character & Weapon;

const Thor: Heroe = {
  name: "Thor",
  type: "Hammer",
  caliber: 999999999n,
};

// readonly array

const fruits: ReadonlyArray<string> = ["laranja", "maçã", "banana"];

//fruits.unshift("ameixa");

console.log(fruits.join(", "));

// tuplas

type arrayFiveNumbers = [number, number, number, number, number];

const arrayNumber: arrayFiveNumbers = [1, 2, 3, 4, 5];
/*const arrayNumber2: arrayFiveNumbers = [1, 2, 3, 4, 5, 6];
  const arrayNumber3: arrayFiveNumbers = ["1", 2, "3", 4, "5"]; */

// tuplas readonly

function showNumber(numbers: readonly [number, number]) {
  // numbers[0] = 10;
  numbers.forEach((number) => console.log(number));
}
