// propertys

class Person {
  name!: string;
  age!: number;
}

const Eduardo = new Person();
Eduardo.name = "Eduardo";
Eduardo.age = 18;

console.log(Eduardo);

// constructor

class AnotherPerson {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  name: string;
  age: number;
}

const Melo: AnotherPerson = new AnotherPerson("Melo", 18);

// readonly property

class Car {
  readonly wheels: number;
  name: string;
  constructor(name: string, wheels: number) {
    this.name = name;
    this.wheels = wheels;
  }
}

const Opala = new Car("Opala", 4);

// Opala.wheels = 5;

class RaceCar extends Car {
  constructor(name: string, wheels: number, nitro: number) {
    super(name, wheels);
    this.nitro = nitro;
  }
  nitro: number;
}

const Ferrari = new RaceCar("Enzo", 4, 164);

// methods

class Dwarf extends AnotherPerson {
  constructor(name: string, age: number, height: number) {
    super(name, age);
    this.height = height;
  }
  grow(height: number) {
    this.height += height;
  }
  height: number;
}

const Pijack = new Dwarf("Pietro", 22, 1.63);
console.log(Pijack);
Pijack.grow(0.03);
console.log(Pijack);

// this

class Truck extends Car {
  constructor(name: string, wheels: number, hp: number) {
    super(name, wheels);
    this.hp = hp;
  }
  hp: number;
  showDetails() {
    console.log(`O caminhão ${this.name} possui ${this.hp}cv de potência.`);
  }
}

const Scania = new Truck("Scania 113", 24, 450);
Scania.showDetails();

// getters

class Human {
  name: string;
  surname: string;
  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  get getFullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

const Edu = new Human("Eduardo", "Melo");
console.log(Edu.getFullName);

// setters

class Coordinates {
  x!: number;
  y!: number;
  set setX(x: number) {
    if (x !== 0) {
      this.x = x;
    }
  }
  set setY(y: number) {
    if (y !== 0) {
      this.y = y;
    }
  }

  get getCoordinates(): string {
    return `X: ${this.x}\nY: ${this.y}`;
  }
}

const DiasDavila = new Coordinates();

DiasDavila.setX = -12.609989;
DiasDavila.setY = -38.302851;

console.log(DiasDavila.getCoordinates);

interface showTitle {
  itemTitle(): string;
}

class Post implements showTitle {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
  itemTitle(): string {
    return `O título do post é "${this.title}"`;
  }
}

const NewPost = new Post(
  "Por que é possível aprender um idioma enquanto você dorme"
);

console.log(NewPost.itemTitle());

// methodOverride

class Base {
  randomMethod(): void {
    console.log("Do random things");
  }
}

class BaseSon extends Base {
  override randomMethod(): void {
    console.log("Do another random things");
  }
}

// public

class PublicClass {
  /*public*/ x: number = 10;
}

const InstanceOfPublic = new PublicClass();

console.log(InstanceOfPublic.x);

// protected

class ProtectedClass {
  protected x: number = 15;
  protected protectedMethod() {
    console.log("Esse método é protegido");
  }
  showProtectedMethod(): void {
    this.protectedMethod();
  }
  get getX() {
    return this.x;
  }
}

const InstanceOfProtected = new ProtectedClass();

// console.log(InstanceOfProtected.x);
// InstanceOfProtected.protectedMethod();

console.log(InstanceOfProtected.getX);
InstanceOfProtected.showProtectedMethod();

// private

class PrivateClass {
  private name: string = "Private";
  get getName(): string {
    return this.name;
  }
}

const InstanceOfPrivate = new PrivateClass();

// console.log(InstanceOfPrivate.name);
console.log(InstanceOfPrivate.getName);

/* class TestingPrivate extends PrivateClass {
  testPrivate() {
    console.log(this.name);
  }
} */

// static members

class Static {
  static staticProperty: string = "Testando static";
  static staticMethod() {
    console.log("Esse é um método estático");
  }
}

console.log(Static.staticProperty);
Static.staticMethod();

// generic class

class GenericClass<T, U> {
  property1: T;
  property2: U;
  constructor(property1: T, property2: U) {
    this.property1 = property1;
    this.property2 = property2;
  }
}

const genericItem = new GenericClass(1, "sim");
const genericItem2 = new GenericClass(true, 4);
const genericItem3 = new GenericClass(null, false);
const genericItem4 = new GenericClass(Ferrari, DiasDavila);

// parametes properties

class ParameterPropeties {
  constructor(public name: string, protected readonly qtd: number) {
    this.name = name;
    this.qtd = qtd;
  }
}

const C = new ParameterPropeties("Nome", 5);

// class expression

const classExpression = class<T> {
  constructor(public name: T) {
    this.name = name;
  }
};

const InstanceOfClassExpression = new classExpression("Expressão de Classe");

// abstract class

abstract class AbstractClass {
  abstract showName(): void;
}

// const instanceOfAbstractClass = new AbstractClass();

class AbstractExample extends AbstractClass {
  constructor(public name: string) {
    super();
    this.name = name;
  }
  showName(): void {
    console.log(this.name);
  }
}
