import './style.css';

import { useState } from 'react';
import WatchedMoviesSummary from '../WatchedMoviesSummary';
import WatchedMovieItem from '../WatchedMovieItem';

function WatchedMoviesList({ watched }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='box'>
      <button className='btn-toggle' onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && (
        <>
          <WatchedMoviesSummary watched={watched} />

          <ul className='list'>
            {watched.map((movie) => (
              <li key={movie.imdbID}>
                <WatchedMovieItem movie={movie} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default WatchedMoviesList;
