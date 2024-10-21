import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const { favorites } = useContext(MovieContext);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl mb-5 text-center">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.length > 0 ? (
          favorites.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p className="text-center">No favorite movies added yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
