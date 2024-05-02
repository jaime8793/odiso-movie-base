function Test() {
  const movie_title = "Fallout";
  return (
    <div className="main-first-screen flex">
      <div className="main-screen-left">
        <img className="img-backdrop-left" src="" alt="" />
        <img className="img-poster-left" src="" alt="" />
        <div>
          <i className="play-trailer-left" alt="" />
          <p className="text-trailer-left"></p>
        </div>
      </div>
      <div className="main-screen-right flex">
        <div className="top-screen-right flex">
          <p className="top-screen-right-text">Featured Videos</p>
          <button className="top-screen-right-button"></button>
        </div>
        <div className="bottom-screen-right flex">
          <div className="bottom-screen-cards flex">
            <img className="img-poster-right" src="" alt="" />
            <div>
              <p className="text-movie-bottom">{`Watch the new ${movie_title} trailer`}</p>

              <div>
                <p className="trailer-duration">3:18</p>
                <i className="play-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-screen-right flex">
          <div className="bottom-screen-cards flex">
            <img className="img-poster-right" src="" alt="" />
            <div>
              <p className="text-movie-bottom">{`Watch the new ${movie_title} trailer`}</p>

              <div>
                <p className="trailer-duration">3:18</p>
                <i className="play-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-screen-right flex">
          <div className="bottom-screen-cards flex">
            <img className="img-poster-right" src="" alt="" />
            <div>
              <p className="text-movie-bottom">{`Watch the new ${movie_title} trailer`}</p>

              <div>
                <p className="trailer-duration">3:18</p>
                <i className="play-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
