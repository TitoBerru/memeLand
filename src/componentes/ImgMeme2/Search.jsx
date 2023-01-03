import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input type="text" onChange={inputHandler} placeholder='Puede buscar por topico'/>
      <button onClick={search} type='button' className="btn btn-primary mt-4 mb-4">Buscar Foto</button>
    </div>
  );
};

export default Search;
