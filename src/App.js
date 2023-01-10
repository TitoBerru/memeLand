import "./App.css";
import { useEffect, useState } from "react";
import { Meme } from "./components/Meme";

const datosQueryProperties = (obj) =>{
  const params = Object.entries(obj).map(([key, value])=> `${key}=${value}`)
  return '?' + params.join('&')
}

function App() {
  const [imagenes, setImagenes] = useState([]);
  const [imagen, setImagen] = useState(null);
  const[fraseArriba, setfraseArriba]=useState("");
  const[fraseAbajo, setFraseAbajo]=useState("");
  const[meme, setMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((x) =>
      x.json().then((response) => setImagenes(response.data.memes))
    );
  }, []);

  if (meme){
    return <div>
      <img src={meme} alt="Meme personalizado" />

</div>
  }
  return (
    <div className="App">
      {imagen && (
      <form onSubmit={async e =>{
        e.preventDefault()
        //agregar logica aca
        const properties ={
          template_id : imagen.id,
          text0 : fraseArriba,
          text1: fraseAbajo,
          username: "xp2008HB",
          password: "imgFlip2008"
        }
        const response = await fetch (`https://api.imgflip.com/caption_image${datosQueryProperties(properties)}`
        );
        const data=await response.json()
        setMeme(data.data.url)
      }}
      >
      <Meme imagen={imagen} />
      <input 
      placeholder="Frase de Arriba" 
      value={fraseArriba} 
      onChange={e=> setfraseArriba(e.target.value)}
      />
      <input 
      placeholder="Frase de Abajo" 
      value={fraseAbajo} 
      onChange={e=> setFraseAbajo(e.target.value)}
      />
      <button type="submit">Crear Meme</button>
      </form>
      )
      }
      {!imagen && (
        <>
          <h1>Elegi la imagen</h1>
          {imagenes.map((imagen) => {
            return (
              <Meme
                imagen={imagen}
                onClick={() => {
                  setImagen(imagen);
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
