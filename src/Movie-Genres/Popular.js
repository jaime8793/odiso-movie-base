import FetchDatas from "../fetchDatas";

function Popular() {
  return (
    <div class="movie-page">
      <div>
        <p class="movie-page-text">Popular Movie's right now</p>
      </div>

      <div>
        <FetchDatas category="/trending" genre="/movie" day="/day" />
      </div>
      <div>
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          width="100%"
          height="100%"
          allowfullscreen="true"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Popular;
