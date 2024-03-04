import React from "react";
import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const Input = ({ search, onSearchChange }) => {
  return (
    <div className="input-container Input-cont">
      <input
        className="input input1"
        placeholder="Search using name"
        value={search}
        onChange={(e) => onSearchChange(e)}
      />

      <button className="btn" type="submit">
        <SearchRoundedIcon />
      </button>
    </div>
  );
};

export default Input;
