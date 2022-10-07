export default async function getData(type, itemsNum) {
  const check = localStorage.getItem(type);

  if (check) {
    const data = JSON.parse(check)
    console.log(data);
    return data;
  } else {
    const api = await fetch(`https://api.spoonacular.com/recipes/${type}?apiKey=${process.env.REACT_APP_API_KEY}&number=${itemsNum}`);
    const data = await api.json();
    localStorage.setItem(type, JSON.stringify(data));
    console.log(data);
    return data;
  }
};
