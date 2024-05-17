import FetchDatas from "../fetchDatas";

function TvShows() {
  return (
    <div class="movie-page">
      <div>
        <p class="movie-page-text">Popular Movie's right now</p>
      </div>
      <div>
        <FetchDatas category="/trending" genre="/tv" day="/day" />
      </div>
    </div>
  );
}

export default TvShows;
