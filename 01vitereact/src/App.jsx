import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Chai from "./chai";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Chai />
      <h1>Chai aur code</h1>
    </>
  );
}

export default App;
