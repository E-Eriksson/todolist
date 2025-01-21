import { LiaTimesCircle, LiaCheckCircle } from "react-icons/lia";

export default function TodoItem({ list, doneFunc, deleteFunc }) {
  const updateDone = doneFunc;
  const deleteItem = deleteFunc;
  function chooseIcon(bool) {
    if (bool) {
      return <LiaCheckCircle />;
    } else {
      return <LiaTimesCircle />;
    }
  }
  const listItems = list.map((item) => (
    <li key={item.id} className="listItem">
      {" Id: " + item.id + " "}
      <b>{item.title}</b>
      {" Done: " + item.done.toString() + " "}
      {chooseIcon(item.done)}
      <button onClick={() => updateDone(item.id)}>Done?</button>
      <button
        onClick={() => {
          deleteItem(item.id);
        }}
        className="deleteButton"
      >
        Delete
      </button>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
