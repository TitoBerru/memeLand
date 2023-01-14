import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import  {Search}  from '../../Api/GetInfo';
import MemeProperties from './../MemeProperties/MemeProperties';
import './MakeAMeme.css'

const MakeAMeme = () => {
    const [characterList, setcharacterList] = useState([]);
    const [memeImage, setMemeImage] = useState('');
    const [memeText, setMemeText] = useState('');
    const [memeText2, setMemeText2] = useState('');
    const [memeTextSize, setMemeTextSize] = useState(22);
    const [memeTextSize2, setMemeTextSize2] = useState(22);
    const [memeTextColor, setMemeTextColor] = useState('#FFF');
    const [memeTextColor2, setMemeTextColor2] = useState('#FFF');
    const [showText2, setShowText2] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await Search();
            setMemeImage(response[0].image);
            setcharacterList(response);
          } catch (error) {
            console.error('This error is from fetch: ' + error);
          }
        };
        fetchData();
      }, []);

      const Download = () => {
      
        html2canvas(document.querySelector('#export'), {useCORS : true, scale: window.devicePixelRatio, backgroundColor : null}).then(function (canvas) {
          let img = canvas.toDataURL('memes/jpg');
          let link = document.createElement('a');
          link.download = 'meme.jpg';
          link.href = img;
          link.click();
          
        });
      };

      return (
        <>
        <div className="headerContainer">
       
        <h1>The Potter's Memes</h1>
      </div>
      <div className="container">
        <div className="memeProperties">
          <h2 className="titleText">Choose a picture</h2>
          <select onChange={(e) => setMemeImage(e.target.value)}>
            {characterList.map((meme) => (
              <option key={meme.id} value={meme.image}>
                {meme.name}
              </option>
            ))}
          </select>
          <h2 className="titleText">Text UP</h2>
    
          <MemeProperties
            textNumber={'TEXT UP'}
            onMemeTextSize={memeTextSize}
            onSetMemeText={(e) => setMemeText(e.target.value)}
            onSetMemeTextSize={(e) => setMemeTextSize(e.target.value)}
            onSetMemeTextColor={(e) => setMemeTextColor(e.target.value)}
          />
          <h2 className="titleText">Text DOWN</h2>
            <MemeProperties
            
              textNumber={'TEXT DOWN'}
              onMemeTextSize={memeTextSize2}
              onSetMemeText={(e) => setMemeText2(e.target.value)}
              onSetMemeTextSize={(e) => setMemeTextSize2(e.target.value)}
              onSetMemeTextColor={(e) => setMemeTextColor2(e.target.value)}
            />
          

          <button onClick={Download} type="button" className="btnDownload">
            DESCARGAR MEME
          </button>
        </div>
        <figure id="export">
        <figcaption
            className="memeText1"
            style={{
              color: `${memeTextColor}`,
              fontSize: `${memeTextSize}px`,
            }}
          >
            {memeText}
          </figcaption>
          <img src={memeImage} alt="MemeImage" className="memeImage" />
         
          <figcaption
            className="memeText2"
            style={{
              color: `${memeTextColor2}`,
              fontSize: `${memeTextSize2}px`,
            }}
          >
            {memeText2}
          </figcaption>
        </figure>
      </div>
        </>
      )




    }

    export default MakeAMeme