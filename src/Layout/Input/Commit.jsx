import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";

import { commentCreate } from "../../components/redux/actions";
import uniqid from "uniqid";
import "./commit.css";
import SingleComment from "./SingleComment";
import SingleAdd from "../../components/Today/Input/SingleAdd";
const Commit = () => {
  const [textComment, setTextComment] = useState("");
  const [show, setShow] = useState(false);

  const comments = useSelector((state) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });
  const data = useSelector((state) => {
    const { todos } = state;
    return todos.data;
  });
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setTextComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment("");
  };
  return (
    <div>
      {comments.length+data.length  ? (


        comments.map((res) => {
          return (
            <SingleComment key={res.id} data={res} />
            // <SingleAdd key={res.id} data={res} />
          );
        })
      ) : (
        <span onClick={() => setShow(true)} className="text y">
          <AiOutlinePlus className="icon y" /> Доьбавить задачу
        </span>
      )}
      { data.map((res) => {
        return <SingleAdd key={res.id} data={res} />
      })}

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
              value={textComment}
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
  );
};

export default Commit;
