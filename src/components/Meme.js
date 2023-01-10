import React from "react";
export const Meme =({imagen, onClick}) => {
    return (
        <img 
        style= { {width: 300} }
        key={imagen.id} 
        src={imagen.url} 
        alt={imagen.name}
        onClick ={onClick}
        />
    )

}