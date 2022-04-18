import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  let imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      <div className='col'>
        <div className='card h-100 w-100 bg-transparent'>
          <img
            src={`${imageBaseUrl}${movie.backdrop_path}`}
            className='card-img-top img-fluid'
            alt=''
          />
          <div className='card-body '>
            <h5 className='card-title '>
              <Link className='text-decoration-none text-white' to={`/movie/${movie.id}`}>
                {movie.title}
              </Link>
            </h5>
            <p className='card-text '>
              <small className='text-white border border-2 rounded-circle p-1'>
                {movie.vote_average}
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
