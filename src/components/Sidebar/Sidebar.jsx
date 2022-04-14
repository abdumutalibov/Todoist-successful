import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { FcPrint, FcPlanner, FcCalculator, FcGrid } from "react-icons/fc";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const comments = useSelector((state) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });
  const data = useSelector((state) => {
    const { todos } = state;
    return todos.data;
  });
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <NavLink 
              to="/"
              className='Item'
              // className={({ isActive }) =>
              //   isActive ? "sidebarListItem active" : "active"
              // }
            >
              <li className="sidebarListItem li">
                <FcPrint className="sidebarIcon" />
                <div className="message">Входящие</div>
                <div className="comments">{comments.length}</div>
              </li>
            </NavLink>
            <NavLink
              to="/user"
              className='Item'
              // className={({ isActive }) =>
              //   isActive ? "sidebarListItem active " : "active"
              // }
            >
              <li className="sidebarListItem ">
                <FcPlanner className="sidebarIcon" />
                <div className="message">Сегодня</div>
                <div className="data">{data.length}</div>
              </li>
            </NavLink>
            <NavLink
              to="/today"
              className='Item'
              // className={({ isActive }) =>
              //   isActive ? "sidebarListItem active" : "active"
              // }
            >
              <li className="sidebarListItem ">
                <FcCalculator className="sidebarIcon" />
                Предстоящее
              </li>
            </NavLink>
            <NavLink
              to="/filter"
              className='Item'
              // className={({ isActive }) =>
              //   isActive ? "sidebarListItem active" : "active"
              // }
            >
              <li className="sidebarListItem ">
                {/* <img src={logo} alt="" className="sidebarIcon"/> */}
                <FcGrid className="sidebarIcon" />
                Фильтры и метки
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
