import React, { useState } from "react";
import { BsSliders } from "react-icons/bs";
import Input from "./Input/Input";
import LineInput from "./Input/LineInput";
import "./today.css";
const Homepage = (props) => {
  const [lineOpen, setLineOpen] = useState(false);

  return (
    <>
      <div className="main">
        <div className="main_container">
          <div className="cont">
            <div className="cont2">
              <div className="exit" style={{}}>
                Сегодня
              </div>{" "}
              <div className="left">
                <BsSliders className="BS" />
                Отображение
              </div>
            </div>
            <Input/>
            {lineOpen ? (
              <LineInput setLineOpen={setLineOpen} />
            ) : (
              <div onClick={() => setLineOpen(true)} className="line">
                Добавить раздел
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
