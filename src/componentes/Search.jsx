import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input type="text" onChange={inputHandler} placeholder='Search by topic...'/>
      <button onClick={search} type='button' className="btn btn-primary mt-4 mb-4">Search</button>
    </div>
  );
};

export default Search;
