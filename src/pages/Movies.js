import React from 'react';
import MovieCard from '../components/MovieCard';
function Movies() {
  return (
    <div className='container min-vh-100'>
      <p className='text-center fs-2 fw-bolder'>Movies</p>
      <div class='row row-cols-3 g-4 my-1'>
          <MovieCard/>
      </div>
    </div>
  );
}

export default Movies;
