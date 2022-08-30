import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
SideBar.propTypes = {};

export function SideBar(props) {
  return (
    <div className="container">
      <div className="sidebar">
        <ul className="sidebar__list">
          <li className="sidebar__item " active>
            <a href="#">Home</a>
          </li>
          <li className="sidebar__item">
            <a href="#">Services</a>
          </li>
          <li className="sidebar__item">
            <a href="#">News</a>
          </li>
          <li className="sidebar__item">
            <a href="#">Blog</a>
          </li>
          <li className="sidebar__item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
