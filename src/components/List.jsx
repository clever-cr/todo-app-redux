import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todo";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
const List = ({
  item,
  handle,
  handleChecked,
  handleDelete,
  handleUpdate,
  index,
}) => {
  const [editInput, setEditInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center justify-between w-[500px]">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            onChange={handleChecked}
            checked={item.checked}
          />

          {item.checked ? (
            <h1>
              <del>{item.text}</del>
            </h1>
          ) : (
            <h1>{item.text}</h1>
          )}
        </label>

        <div className="flex space-x-2">
          <input
            className="w-[500px] bg-green-400"
            value={editInput}
            onChange={(event) => {
              setEditInput(event.target.value);
            }}
          />

          <AiTwotoneEdit
            onClick={() => {
              dispatch(
                updateTodo({
                  index,
                  editInput,
                })
              );
            }}
          />
          <AiTwotoneDelete onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default List;
