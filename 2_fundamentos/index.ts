// number

let n: number = 10;

console.log(n);
console.log(n.toPrecision(5));
console.log(n.toFixed(5));
console.log(typeof n);

// string

let firstName: string = "Eduardo";

let lastName: string = "Nascimento";

let fullName: string;
fullName = firstName + " " + lastName;

console.log(fullName);
console.log(typeof fullName);

// boolean

let a: boolean = false;

console.log(typeof a);

// inference e annotation

let inference = "Variável com tipo atribuido por inferência.";
let annotation: string = "Variável com tipo atribuido por anotação.";
