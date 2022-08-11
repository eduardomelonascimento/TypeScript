type Props = {
  name: string;
  age: number;
};
// destructuring props
export default function UserPresentation({ name, age }: Props) {
  return (
    <div>
      {" "}
      <h2>Nome: {name}</h2>
      <h2>Idade: {age}</h2>
    </div>
  );
}
