import Input from "./components/Input";
import Boxes from "./components/Boxes";
import Card from "./components/Card";
import Avatar from "../src/components/Avatar";
import Counter from "./components/Counter";

function App() {
  let stylesArr = [
    { width: "300px", height: "150px", backgroundColor: "red" },
    { width: "200px", height: "200px", backgroundColor: "blue" },
    { width: "100px", height: "100px", backgroundColor: "green" },
  ];
  return (
    <>
      <Counter />
      {/* <Card>
        <Avatar
          src="https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/16:9/w_1280,c_limit/IMG%20Worlds%20of%20Adventure%20-%201.jpg"
          alt="Alternative text"
        />
      </Card> */}
      {/* <Boxes stylesArr={stylesArr} /> */}
      {/* <Input /> */}
    </>
  );
}

export default App;
