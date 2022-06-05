import React, { useState } from "react";
import "./main-layout.css";
import { AiOutlinePlus } from "react-icons/ai";
// import {  BsSliders} from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import Input from "./Input/Input";
import LineInput from "./Input/LineInput";

const MainLayout = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
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
            {modalOpen ? (
              <Input setModalOpen={setModalOpen} />
            ) : (
              <span onClick={() => setModalOpen(true)} className="text y">
                <AiOutlinePlus className="icon y" /> Доьбавить задачу
                </span>
            )}
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
