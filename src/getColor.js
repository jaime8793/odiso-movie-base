import { useState } from "react";
import { ColorExtractor } from "react-color-extractor";

function GetColorExample() {
  const [imgColors, setImgColors] = useState();

  return (
    <div>
      <ColorExtractor getColors={(colors) => setImgColors(colors)}>
        <img
          className="img-backdrop-left rounded "
          style={{ width: 1041, height: 631 }}
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.backdrop_url}
        />
          </ColorExtractor>
        {console.log(imgColors)}
    </div>
  );
}

export default GetColorExample;
