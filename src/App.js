import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); /* 비어있는 배열 toDos 생성 */
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo(""); /* empty하게 만들기 */
  };
  console.log(toDos);
  return (
    <div>
      <h2>My todo-list ({toDos.length})</h2>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your TODO here!"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
