import { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";

function App() {
  const [title, setTitle] = useState("");
  const [todoList, setItem] = useState([]);

  function addItem(title) {
    let listObject = {};
    listObject.id = Date.now();
    listObject.title = title;
    listObject.done = false;
    setItem([...todoList, listObject]);
  }

  const updateDone = (Id) => {
    setItem(
      todoList.map((item) =>
        item.id === Id ? { ...item, done: !item.done } : item
      )
    );
  };

  const deleteItem = (Id) => {
    setItem(todoList.filter((item) => item.id !== Id));
  };

  return (
    <>
      <h1>Todo List:</h1>
      <label htmlFor="addToList">Titel of item</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (title == "") {
            alert("Enter some text first");
          } else {
            addItem(title);
            setTitle("");
          }
        }}
      >
        Add to todolist
      </button>
      <TodoItem list={todoList} doneFunc={updateDone} deleteFunc={deleteItem} />
    </>
  );
}

export default App;
