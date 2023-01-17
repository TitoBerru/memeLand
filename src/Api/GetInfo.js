export const Search = async () => {
  const url = 'https://hp-api.onrender.com/api/characters';
  let responseWithImg = [];
  const response = await fetch(url)
    .then((data) => data.json())
    
    response.forEach(element => {
      if(element.image.length !== 0){
        responseWithImg.push(element)
      }
      
    });
    console.log(responseWithImg)
  return responseWithImg;
};
