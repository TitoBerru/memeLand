export const Search = async () => {
  const url = 'https://hp-api.onrender.com/api/characters';
  const response = await fetch(url)
    .then((data) => data.json())
  return response;
};
