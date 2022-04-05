import { useDispatch } from "react-redux";
import { removeTodo ,toggleTodoComplete} from "../store/todoSlice";
const TodoItem = ({ id, text, completed,   }) => {
  const dispatch = useDispatch();
  console.log(text);


  return (
    <li className="li">
      <input
      required
        type="checkbox"
        checked={completed}
        onChange={() =>dispatch(toggleTodoComplete({id}))}
      />

      <span className="span">{text}</span>

      <span onClick={() =>dispatch(removeTodo({id}))} className="delete">
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
