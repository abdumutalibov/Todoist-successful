import React from "react";
import "./sidebar.css";
import {  NavLink } from "react-router-dom";
import { FcPrint, FcPlanner, FcCalculator, FcGrid } from "react-icons/fc";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "sidebarListItem active" : "active"
              }
            >
              <li className="sidebarListItem ">
                <FcPrint className="sidebarIcon" />
                Входящие
              </li>
            </NavLink>
            <NavLink
              to="/user"
              className={({ isActive }) =>
                isActive ? "sidebarListItem active " : "active"
              }
            >
              <li className="sidebarListItem ">
                <FcPlanner className="sidebarIcon" />
                Сегодня
              </li>
            </NavLink>
            <NavLink
              to="/today"
              className={({ isActive }) =>
                isActive ? "sidebarListItem active" : "active"
              }
            >
              <li className="sidebarListItem ">
                <FcCalculator className="sidebarIcon" />
                Предстоящее
              </li>
            </NavLink>
            <NavLink
              to="/filter"
              className={({ isActive }) =>
                isActive ? "sidebarListItem active" : "active"
              }
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
