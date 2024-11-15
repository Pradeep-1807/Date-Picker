import { useState } from "react";
import DatePicker from './components/DatePicker'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-400">
        Hello world!
      </h1>
      <DatePicker />
    </>
  );
}

export default App;
