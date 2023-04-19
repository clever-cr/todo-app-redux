import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todo";
import { TiTick } from "react-icons/ti";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
const List = ({ item, handleChecked, handleDelete, index }) => {
  const [editInput, setEditInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (event) => setEditInput(event.target.value);

  const handleEdit = () => {
    setEditInput(item.text);
    dispatch(
      updateTodo({
        index,
        editInput,
      })
    );
    setIsClicked(!isClicked);
  };

  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center justify-between w-[500px]">
        <label className="flex items-center space-x-2">
          <input
            value={editInput}
            type={`${isClicked ? "text" : "checkbox"}`}
            onChange={isClicked ? handleChange : handleChecked}
            checked={item.checked}
          />

          {item.checked ? (
            <h1>
              <del>{item.text}</del>
            </h1>
          ) : (
            !isClicked && <h1>{item.text}</h1>
          )}
        </label>

        <div className="flex space-x-2">
          {isClicked ? (
            <TiTick onClick={handleEdit} />
          ) : (
            <AiTwotoneEdit onClick={handleEdit} />
          )}
          <AiTwotoneDelete onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default List;
