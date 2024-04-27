import MovieTile from "./movieTiles";

function MoviePage() {
    return (
        <div class="movie-page">
            <div>
                <p class="movie-page-text">Movie Page</p>
            </div>
        <div>
          <MovieTile />
        </div>
      </div>
    );
}

export default MoviePage;
