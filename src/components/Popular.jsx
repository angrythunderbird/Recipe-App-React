import { useEffect, useState } from "react";
import getData from "../services/apiService";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    // let cancelled = false;
    getData('random')
      .then((data) => setPopular(data.recipes));
      
    // return () => cancelled = true;
  }, []);

  return (
    <div>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>{recipe.title}</div>
        )
      })}
    </div>
  );
};

export default Popular;
