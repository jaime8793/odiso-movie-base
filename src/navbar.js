import React from "react";

function Navbar() {
  return (
    <div class="container noise navbar">
      <div class="">
        <span>
          <a class=" text-white p-2 badge badge-primary " href="Logo">
            Logo
          </a>
        </span>
        <span>
          <a class=" text-white p-2 badge badge-primary " href="Profile">
            Profile
          </a>
        </span>
        <span>
          <a class=" text-white p-2 badge badge-primary " href="Movie">
            Movie
          </a>
        </span>
        <span>
          <a class=" text-white p-2 badge badge-primary " href="TV Show">
            TV Show
          </a>
        </span>
        <span>
          <a class=" text-white p-2 badge badge-primary  " href="Anime">
            Anime
          </a>
        </span>
      </div>
      <div class=" d-flex flex-row justify-content-end align-items-center ">
        <span>
          <a
            class="text-white p-2 badge badge-primary "
            href="Search"
          >
            Search
          </a>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
