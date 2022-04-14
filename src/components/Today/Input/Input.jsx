import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { addTodo } from "../../redux/actions";
import { AiOutlinePlus } from "react-icons/ai";
import "./input.css";
import SingleAdd from "./SingleAdd";

const Input = (props) => {
  const [textAdd, setTextAdd] = useState("");
  const [show, setShow] = useState(false);
  const data = useSelector((state) => {
    const { todos } = state;
    return todos.data;
  });
  const handleInput = (e) => {
    setTextAdd(e.target.value);
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(addTodo(textAdd, id));
    setTextAdd("");
  };
  return (
    <>
      <div>
        {data.length ? (
          data.map((res) => {
            return <SingleAdd key={res.id} data={res} />;
          })
        ) : (
          <span onClick={() => setShow(true)} className="text y">
            <AiOutlinePlus className="icon y" /> Доьбавить задачу
          </span>
        )}

        {show ? (
          <form onSubmit={handleSubmit}>
            <div className="box">
              <textarea
                onChange={handleInput}
                className="input-text second"
                required
                type="text"
                // minLength={100}
                rows="6"
                cols="100"
                value={textAdd}
                placeholder="напр, Конференция среда"
              />
              <input type="submit" hidden />
            </div>

            <div>
              <button
                type="submit"
                className="add"
                onClick={() => setShow(true)}
                onKeyDown={() => setShow(false)}
              >
                Добавить задачу
              </button>
              <button
                type="button"
                className="close"
                onClick={() => setShow(false)}
              >
                Отмена
              </button>
            </div>
          </form>
        ) : (
          <button type="submit" className="add" onClick={() => setShow(true)}>
            Добавить задачу
          </button>
        )}
      </div>
    </>
  );
};

export default Input;

