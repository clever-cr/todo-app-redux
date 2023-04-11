import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { addTodo, deleteTodo, updateTodo, checkTodo } from "./features/todo";
import { useSelector, useDispatch } from "react-redux";
import List from "./components/List";
import { nanoid } from "@reduxjs/toolkit";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [input, setInput] = useState("");
  console.log("input", input);

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  const handleAdd = () => {
    if (input.trim() == "") {
      alert("Add a todo");
    } else {
      dispatch(
        addTodo(
          {
            id: nanoid(),
            text: input,
            checked: false,
          },
          ...todos
        )
      );
    }
    setInput("");
  };
  return (
    <div className="p-12 space-y-12">
      <h3 className="text-7xl text-gray-300">todos</h3>
      <div className="flex items-center  px-5 p-2 rounded-xl shadow-lg justify-between">
        <input
          type="text"
          className="outline-none w-full"
          placeholder="Add todo..."
          name="todo"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
          onKeyDown={handleEnter}
        />
        <GoPlus
          onClick={handleAdd}
          className="bg-green-700 text-white rounded-full px-1 w-5 h-5"
        />
      </div>
      {todos.map((item, index) => {
        return (
          <List
            item={item}
            index={item.id}
            handleDelete={() => {
              dispatch(deleteTodo(index));
            }}
            handleChecked={() => {
              dispatch(checkTodo({ index: item.id }));
            }}
          />
        );
      })}
    </div>
  );
};

export default App;
