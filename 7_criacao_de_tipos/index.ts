// generics

function showData<T>(arg: T): string {
  return `Dado: ${arg}`;
}

console.log(showData(5));
console.log(showData("Teste"));

// constraints in generics

function showProdName<T extends { name: string }>(obj: T): string {
  return `O nome do produto é: ${obj.name}`;
}

const shirt = { name: "Camisa", color: "white", isAvaible: true };
const car = { name: "Opala", wheels: 4 };
const laptop = { brand: "Dell", CPU: "Intel Core i-7 13th generation" };

console.log(showProdName(shirt));
console.log(showProdName(car));
// console.log(showProdName(laptop));

// generic interfaces

interface Person<T, U> {
  name: string;
  rg: T;
  cpf: U;
}

type Developer = Person<string, string>;
type Designer = Person<string, number>;

const developer: Developer = {
  name: "Eduardo",
  cpf: "000.000.000-00",
  rg: "000-000-000.00",
};
const designer: Designer = {
  name: "Carla",
  cpf: 57652168861,
  rg: "000-000-000.00",
};

console.log(developer);
console.log(designer);

// type parameters

function getKey<T, K extends keyof T>(obj: T, key: K): string {
  return `A chave ${String(key)} possui o valor ${obj[key]}`;
}

const computer = {
  hd: "1tb",
  ssd: "512mb",
  ram: "16gb",
};

console.log(getKey(computer, "hd"));
console.log(getKey(computer, "ssd"));
// console.log(getKey(computer, "gpu"));

// keyof type operator

type Human = { name: string; age: number; completedHighSchool: boolean };

type K = keyof Human;

function showHumanName(obj: Human, name: K): string {
  return `${obj[name]}`;
}

const Edu: Human = { name: "Eduardo", age: 18, completedHighSchool: false };

showHumanName(Edu, "name");

// typeof type operator

type x = typeof userName;
const userName: string = "Eduardo";
const nickname: x = "nascyimento";

// indexed access type

type Truck = {
  km: number;
  kg: number;
  description: string;
};

type Km = Truck["km"];

const newTruck: Truck = {
  kg: 15000,
  km: 500000,
  description: "Caminhão",
};

function showKm(km: Km): string {
  return `O veículo possui a quilometragem de ${km}km`;
}

console.log(showKm(newTruck.km));

// conditional types

interface A {}

interface B extends A {}

type myType = B extends A ? number : string;

const myVar: myType = 5;
// const myVar2: myType = "teste";

console.log(typeof myVar);

// template literals type

type TestA = "text";

type CustomType = `some ${TestA}`;

const testing: CustomType = "some text";
// const  testing2: CustomType = "some text2";

type A1 = "testando";
type A2 = "union";
type A3 = `${A1 | A2}`;

const testingUnion: A3 = "testando";
const testingUnion2: A3 = "union";
