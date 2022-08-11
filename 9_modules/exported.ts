export default function exportedFunction(): void {
  console.log("Essa função foi importada de outro arquivo");
}

export const myName: string = "Eduardo";

export const mySurname: string = "Nascimento";

export interface Person {
  name: string;
  age: number;
  job: string;
  height: number;
}
