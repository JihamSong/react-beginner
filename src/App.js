import Button from "./Button.js";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time!");
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when COUNTER changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when KEYWORD changes.");
    /* keyword가 변화할 때마다 실행되는 코드 */
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here!"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
