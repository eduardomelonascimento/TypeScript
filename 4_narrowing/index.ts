// type guard

function sum(a: number | string, b: number | string): void {
  if (typeof a === "string" && typeof b === "string") {
    console.log(Number(a) + Number(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Dados inválidos.");
  }
}

sum("1", "2");
sum(1, 2);
sum(1, "2");

// checking if value exists

function calc(arr: number[], operation?: string | undefined): number | string {
  if (operation) {
    switch (operation) {
      case "+":
        return arr.reduce((num1, num2) => num1 + num2);
      case "-":
        return arr.reduce((num1, num2) => num1 - num2);
      case "*":
        return arr.reduce((num1, num2) => num1 * num2);
      case "/":
        return arr.reduce((num1, num2) => num1 / num2);
      default:
        return "Defina uma operação válida";
    }
  } else {
    return "Defina uma operação";
  }
}

console.log(calc([5, 6, 1], "*"));

// instance of

class user {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class superUser extends user {
  constructor(name: string) {
    super(name);
  }
}

const user1 = new user("Edu");
const user2 = new superUser("Dudu");

function greetings(person: object): void {
  if (person instanceof user) {
    console.log("Bem vindo usuário ", person.name);
  } else if (person instanceof superUser) {
    console.log("Bem vindo admin ", person.name);
  }
}

greetings(user1);
greetings(user2);

// in

class Dog {
  name: string;
  breed?: string;

  constructor(name: string, breed?: string) {
    this.name = name;
    breed ? (this.breed = breed) : null;
  }
}

const rotweiller = new Dog("Bolt", "rotweiller");
const viraLata = new Dog("Bob");

function showDogDetails(dog: Dog): string {
  if ("breed" in dog) {
    return `${dog.name} é um(a) ${dog.breed}`;
  }
  return `${dog.name} é um(a) vira-lata`;
}

console.log(showDogDetails(rotweiller));
console.log(showDogDetails(viraLata));
