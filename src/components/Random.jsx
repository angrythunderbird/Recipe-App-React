import { useEffect, useState } from "react";
import getData from "../services/apiService";
import Slider from "./Slider";

import './popular.css';


function Random() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getData('random', 6)
      .then((data) => setPopular(data.recipes));
  }, []);

  return (
    <>
      <div className="popular-wrapper">
        <Slider popular={popular} />
      </div>
    </>
  );
};

export default Random;
