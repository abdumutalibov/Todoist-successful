import React, { useState } from "react";
import "./main-layout.css";
import { BsSliders } from "react-icons/bs";
import Input from "./Input/Commit";
import LineInput from "./Input/LineInput";

const MainLayout = () => {
  const [lineOpen, setLineOpen] = useState(false);

  return (
    <>
      <div className="main">
        <div className="main_container">
          <div className="cont">
            <div className="cont2">
              <div className="exit" style={{}}>
                Входящие
              </div>{" "}
              <div className="left">
                <BsSliders className="BS" />
                Отображение
              </div>
            </div>
            <Input />

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

export default MainLayout;
