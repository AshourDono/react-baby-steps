import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import instance from '../network/axiosconfig';

function Movies() {
  const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);
  let param = useParams();

  useEffect(() => {
    instance
      .get(`/popular`, {
        params: {
          page: param.page,
        },
        crossdomain: true,
      })
      .then(res => setMovies(res.data.results))
      .catch(err => console.log(err));
  }, [param.page]);

  const handleNext = page => {
    page = page + 1;
  };

  const handlePrevious = page => {
    if (page > 1) {
      page = page - 1;
    } else {
      page = 1;
    }
  };

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
          <li className='page-item'>
            <Link
              className='page-link'
              to={`/movies/${param.page > 1 ? parseInt(param.page) - 1 : 1}`}
              tabIndex='-1'
              onClick={() => {
                handlePrevious(param.page);
              }}>
              Previous
            </Link>
          </li>

          <li className='page-item'>
            <Link
              className='page-link'
              to={`/movies/${parseInt(param.page) + 1}`}
              onClick={() => {
                handleNext(param.page);
              }}>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Movies;