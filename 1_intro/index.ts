const firstName: string = "Eduardo";
const lastName: string = "Nascimento";
const age: number | string = "Dezoito anos";
const isStudent: boolean = true;

function greeting(name: string): string {
  return `Olá, ${name}`;
}

document.body.innerHTML += `<h1>${greeting(firstName)}</h1>`;
