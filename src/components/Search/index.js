import React from "react";

import "./Search.css";

const Search = ({ textChange }) => {

  const handleChange = event => {
    textChange(event);
  };

  return (
    <div className="search">
      <div>
        <input onChange={handleChange} />
      </div>
    </div>
  );
}

export default Search