import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const searchIcon = <FontAwesomeIcon className="icon" icon={faSearch} />;

export default props => {
  return (
    <div className="search">
      {searchIcon}
      <input
        onChange={event => {
          const text = event.target.value;

          props.setSearch(text);
        }}
        className="input"
        type="search"
        placeholder="Search"
      />
    </div>
  );
};
