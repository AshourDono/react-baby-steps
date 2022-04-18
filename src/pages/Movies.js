import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import instance from '../network/axiosconfig';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    instance
      .get('/popular', {
        crossdomain: true,
      })
      .then(res => setMovies(res.data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container min-vh-100'>
      <p className='text-center fs-2 fw-bolder'>Movies</p>
      <div className='row row-cols-3 g-4 my-1'>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <nav aria-label='Page navigation example'>
        <ul className='pagination justify-content-center'>
          <li className='page-item disabled'>
            <Link className='page-link' to='' tabIndex='-1'>
              Previous
            </Link>
          </li>
          <li className='page-item'>
            {/* {[...Array(movies.pages).keys()].map(page => {
              return (
                <Link className='page-link' to={`/popular?page=${page + 1}`}>
                  {page + 1}
                </Link>
              );
            })} */}
          </li>
          <li className='page-item'>
            <Link className='page-link' to=''>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Movies;
