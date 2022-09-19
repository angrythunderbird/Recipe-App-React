export default async function getData(type) {
  const api = await fetch(`https://api.spoonacular.com/recipes/${type}?apiKey=${process.env.REACT_APP_API_KEY}&number=3`);
  const data = await api.json();
  console.log(data);
  return data;
};
