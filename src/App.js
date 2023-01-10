import './App.css';
import { useEffect, useState } from 'react';
import { Meme } from './components/Meme';

function App() {
  const [imagenes, setImagenes] = useState([]);
  const [imagen, setImagen] = useState(null);
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes").then(x => x.json().then(response => setImagenes(response.data.memes))
    );
  }, [])
  return (
    <div className="App">
      {imagen && <Meme imagen={imagen} />}
      {!imagen &&
        imagenes.map(imagen =>{
          return (
           <Meme
           imagen={imagen}
           onClick={()=>{
            setImagen(imagen);
           }}

            />
          );
          
        })}
    </div>
  );
}

export default App;
