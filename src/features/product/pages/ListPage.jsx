import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import ProductList from "../components/ProductList";
ListPage.propTypes = {};

function ListPage(props) {
  return (
    <div className="box">
      <div className="logo">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div className="title">
        <h3 className="title__name">Lorem ipsum dolor sit asmet?</h3>
        <p className="title__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <div className="">
        <ProductList />
      </div>
    </div>
  );
}

export default ListPage;
