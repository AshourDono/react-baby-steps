import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import instance from '../network/axiosconfig';

function MovieDetails() {
  const [movie, setMovie] = useState([]);

  const param = useParams();

  let imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    instance
      .get(`/${param.id}`, {
        crossdomain: true,
      })
      .then(res => setMovie(res.data))
      .catch(err => console.log(err));
  }, [param.id]);

  return (
    <div className='min-vh-100'>
      <div className='card m-5 bg-transparent'>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img
              src={`${imageBaseUrl}${movie.backdrop_path}`}
              className='img-fluid rounded-start'
              alt='...'
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <p className='card-title text-danger fs-2 mb-2'>{movie.original_title}</p>
              <p className='card-text text-white'>{movie.overview}</p>
              <p className='card-text '>
                <small className='text-white border border-2 rounded-circle p-2'>
                  {movie.vote_average}
                </small>
              </p>
              <p className='card-text'>
                <small className='text-warning'>{`Release Date: ${movie.release_date}`}</small>
              </p>
              <p className='card-text'>
                <small className='text-white'>
                  {`Original Language: ${movie.original_language}`}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
