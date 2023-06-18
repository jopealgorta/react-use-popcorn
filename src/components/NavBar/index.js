import './style.css';
import SearchMoviesInput from '../SearchMoviesInput';

function Logo() {
  return (
    <div className='logo'>
      <span role='img'>🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function NumResults({ numResults }) {
  return (
    <p className='num-results'>
      Found <strong>{numResults}</strong> results
    </p>
  );
}

function NavBar({ movies }) {
  return (
    <nav className='nav-bar'>
      <Logo />
      <SearchMoviesInput />
      <NumResults numResults={movies.length} />
    </nav>
  );
}

export default NavBar;
