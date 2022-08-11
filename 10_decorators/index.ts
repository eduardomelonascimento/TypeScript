// decorator example

function myDecorator() {
  console.log("Iniciando execução do decorator");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class MyClass {
  @myDecorator()
  testing() {
    console.log("terminando execução do método");
  }
}

const myObj = new MyClass();
myObj.testing();

console.log("");

// multiple decorators

function a() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou a");
  };
}

function b() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou b");
  };
}

class MultipleDecorators {
  @b()
  @a()
  testing() {
    console.log("terminando execução");
  }
}

const multipleDecorators = new MultipleDecorators();

multipleDecorators.testing();

// class decorator

function classDecorator(constructor: Function): void {
  console.log(constructor);
}

@classDecorator
class User {
  constructor(public name: string) {
    this.name = name;
  }
}

const newUser = new User("Eduardo");

// method decorator

function enumerable(value: boolean): Function {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machine {
  constructor(public name: string) {
    this.name = name;
  }

  @enumerable(false)
  showName(): string {
    console.log(this);
    return `O nome da máquina é: ${this.name}`;
  }
}

const Car = new Machine("Car");
console.log(Car.showName());

// accessor decorator

class Monster {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  get getName(): string {
    return this.name;
  }

  @enumerable(false)
  get getAge(): number {
    return this.age;
  }
}

const Pikachu = new Monster("Pikachu", 14);

console.log(Pikachu);

// property decorator

function formatId(): Function {
  return function (target: any, propertyKey: string) {
    let value: string;
    const getter = () => value;
    const setter = (newValue: string) => (value = newValue.padStart(5, "0"));

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
    });
  };
}

class Id {
  @formatId()
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new Id("1");

console.log(newItem);

// class decorator example

function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  createdAt?: Date;
  constructor(public id: number) {
    this.id = id;
  }
}

const newBook = new Book(1234);

console.log(newBook);
console.log(newBook.createdAt);

// method decorator example

function checkIfUserPosted(): Function {
  return function (
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (args[1]) {
        console.log("Usuário já postou");
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };
    return descriptor;
  };
}

class Post {
  posted: boolean = false;
  @checkIfUserPosted()
  post(content: string, posted: boolean) {
    this.posted = true;
    console.log(`Postou: ${content}`);
  }
}

const newPost = new Post();

newPost.post("Conteúdo 1", newPost.posted);
newPost.post("Conteúdo 2", newPost.posted);

// property decorator example

function validateUserName(limit: number): Function {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = () => value;
    const setter = (newValue: string) => {
      if (newValue.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} caracteres.`);
        return;
      }
      value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
    });
  };
}

class Admin {
  @validateUserName(6)
  username: string;

  constructor(username: string) {
    this.username = username;
  }
}

const Edu = new Admin("Eduardo")