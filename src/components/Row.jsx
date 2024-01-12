import React, { useEffect, useState } from "react";
import tmdbAxiosInstance from "../tmdbAxiosInstance";
import "./row.css";

function Row({ title, fetchUrl, isPoster }) {
  // console.log(fetchUrl);
  const [allmovies, Setallmovies] = useState();
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData = async () => {
    const { data } = await tmdbAxiosInstance.get(fetchUrl);
    // console.log(data.results);
    Setallmovies(data.results);
  };

  console.log(allmovies);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="movies-row">
        {allmovies?.map((item) => (
          <img
            className={`${isPoster && "movie-poster"} movies`}
            src={`${base_url}/${
              isPoster ? item.poster_path : item?.backdrop_path
            }`}
            alt="noimg"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
