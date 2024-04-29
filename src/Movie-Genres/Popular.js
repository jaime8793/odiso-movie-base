import MovieTile from "../movieTiles";

function Popular() {
  return (
    <div class="movie-page">
      <div>
        <p class="movie-page-text">Popular Movie's right now</p>
      </div>
      <div>
        <MovieTile />
      </div>
    </div>
  );
}

export default Popular;
