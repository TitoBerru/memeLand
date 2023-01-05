import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>Fotografo: {data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
       
        <a href={data.src.large} target="_blank" rel="noreferrer">
          <button type='button' className="btn btn-secondary mt-4 mb-4">
          Seleccionar esta imagen
          </button>
          
        </a>
      </p>
    </div>
  );
};

export default Picture;
