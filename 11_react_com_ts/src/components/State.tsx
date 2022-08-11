import { ChangeEvent, useState } from "react";

type Props = {};

function State({}: Props) {
  const [text, setText] = useState<string>("");

  function handleChange({ target }: ChangeEvent<HTMLInputElement>): void {
    setText(target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>O texto é: {text}</p>
    </div>
  );
}

export default State;
