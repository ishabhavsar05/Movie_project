import React, { useState, useEffect } from "react";
import MovieCard from "../Component/MovieCard";
import axios from "axios";

const BASEURL = import.meta.env.VITE_BASEURL;

const AllMovies = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [movies, setMovies] = useState([]);

  const getDataFromServer = async () => {
    try {
      const res = await axios.get(`${BASEURL}/movie/fetchAllMovies`, {
        withCredentials: true,
      });
      setMovies(res.data.movies); // assume server returns { movies: [...] }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    if (currentUser?._id) {
      getDataFromServer();
    }
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">All Movies</h1>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movieId={movie._id}
              title={movie.title}
              genre={movie.genre}
              director={movie.director}
              releaseYear={movie.releaseYear}
              description={movie.description}
              onDelete={getDataFromServer}
            />
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
