import './style.css';

import { useState } from 'react';
import MovieItem from '../MovieItem';

function MoviesList({ movies }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='box'>
      <button className='btn-toggle' onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && (
        <ul className='list'>
          {movies?.map((movie) => (
            <li key={movie.imdbID}>
              <MovieItem movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoviesList;
