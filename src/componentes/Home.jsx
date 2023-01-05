import React, { useState, useEffect } from "react";
import Search from "./Search";
import Picture from "./Picture";
import './../styles/Home.css'
import html2canvas from 'html2canvas';

export const Home = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [current, setCurrent] = useState("");

  const Descargar = (e) => {
    html2canvas(document.querySelector("#exportar")).then(function(canvas) {
        let img = canvas.toDataURL("memes/jpg");
        let link = document.createElement("a");
        // link.download = "memepropio.jpg";
        link.download = `${e.target.value}.jpg`;
        link.href = img;
        link.click();
    });

}



  const search = async (url) => {
    setPage(2);
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth
      }
    });
    let parseDate = await dataFetch.json();
    setData(parseDate.photos);
  };
  const auth = "563492ad6f9170000100000177956e8507704dfe86e38f56c2016809";
  const initailURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${current}&per_page=15&page=1`;

  const morepicture = async () => {
    let newURL;
    if (input === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=${page}`;
    }
    setPage(page + 1);
    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth
      }
    });
    let parseDate = await dataFetch.json();
    setData(data.concat(parseDate.photos));
  };

  useEffect(() => {
    search(initailURL);
  }, []);

  useEffect(() => {
    if (current === "") {
      search(initailURL);
    } else {
      search(searchURL);
    }
  }, [current]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          setCurrent(input);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} key={d.id} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morepicture} type='button' className="btn btn-secondary mt-4 mb-4">Cargar mas fotos</button>
        <button onClick={Descargar} type="button" className='btn btn-secondary mt-4 mb-4'>Descargar meme</button>
    </div>
      <div className="thanks">Photos powered by: <span>
        <a href="https://www.pexels.com">
        <img src="https://images.pexels.com/lib/api/pexels.png" />
      </a> & Design by Tito Berru
      </span>
      </div>
      
    </div>
  );
};

export default Home;
