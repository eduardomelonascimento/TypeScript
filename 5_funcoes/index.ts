// void

function voidFunction(): void {
  console.log("Função sem retorno");
}

voidFunction();

// callback com argumento

function greeting(name: string): string {
  return `Olá ${name}`;
}

function callGreeting(callback: Function, name: string) {
  console.log(callback(name));
}

callGreeting(greeting, "Eduardo");

// generic function

function showFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(showFirstElement([1, 2, 3, 4, 5]));
console.log(showFirstElement(["a", "b", "c", "d", "e"]));

function mergeObjects<U, T>(obj1: U, obj2: T): U | T {
  return {
    ...obj1,
    ...obj2,
  };
}

const person: object = mergeObjects({ nome: "Eduardo" }, { idade: 18 });

console.log(person);

// constraints

function biggestNumber<T extends number | string>(num1: T, num2: T): T {
  return +num1 > +num2 ? num1 : num2;
}

console.log(biggestNumber("10", "5"));
console.log(biggestNumber(10, 5));

// especificar tipos de argumentos

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

console.log(mergeArrays<number | string>([1, 2, 3], ["4", "5", "6"]));

// parametros opcionais

function greeting2(name: string, greet?: string): string {
  return greet ? `${greet} ${name}` : `Bem vindo(a) ${name}`;
}

console.log(greeting2("Eduardo", "Seja muito bem vindo"));
console.log(greeting2("Eduardo"));

// parametros default

function greeting3(name: string, greet: string = "Bem vindo(a)"): string {
  return `${greet} ${name}`;
}

console.log(greeting3("Eduardo", "Seja muito bem vindo"));
console.log(greeting3("Eduardo"));

// type unknown

function doSomething(x: unknown): void {
  if (Array.isArray(x)) console.log(x[0]);
  else if (typeof x === "number") console.log("X é um número");
}

doSomething([1, 2, 3]);
doSomething(1);

// type never

function showErrorMessage(message: string): never {
  throw new Error(message);
}

// showErrorMessage("Erro");

function showNumbers(...numbers: number[]) {
  numbers.forEach((number) => console.log(number));
}

showNumbers(1, 4, 5, 30, 3, 6, 9, 7);

// destructuring

function showProdutDetails({ name, price }: { name: string; price: number }) {
  return `${name} custa R$${price.toFixed(2).replace(".", ",")}`;
}

const shirt = { name: "Camisa", price: 80.5 };

console.log(showProdutDetails(shirt));
