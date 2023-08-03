import { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  return (
    <>
      <h1>{text}</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </>
  );
};
export default Input;
