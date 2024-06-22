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
</div>
  );
}

export default Popular;
