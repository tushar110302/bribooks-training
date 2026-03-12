import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  function incrementHandler() {
    setCount(count + 1);
  }

  function decrementHandler() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <Header />
      <h2>{count}</h2>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </>
  );
}

export default App;
