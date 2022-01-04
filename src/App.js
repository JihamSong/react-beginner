import Button from "./Button.js";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  return (
    <div>
      <h1 className={styles.title}>😊Welcome Back!</h1>
      <Button text="Continue" />
    </div>
  );
}

export default App;
