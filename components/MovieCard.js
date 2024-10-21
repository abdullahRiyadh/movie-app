import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { MovieContext } from '../context/MovieContext';

const MovieCard = ({ movie }) => {
  const { addToFavorites } = useContext(MovieContext);

  console.log('Rendering movie:', movie); // Debugging: log the movie being rendered

  return (
    <div className="movie-card bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-200 transform hover:scale-105 mx-auto flex flex-col">
      {/* Link to movie details page */}
      <Link href={`/${movie.imdbID}`}>
        <Image

          src={movie.Poster} 
          alt={movie.Title} 
          className="w-full h-72 object-cover rounded-lg mb-3 cursor-pointer" 
        />
      </Link>

      {/* Movie Title */}
      <h3 className="text-lg font-semibold text-center mt-2 flex-grow">{movie.Title}</h3>

      {/* Button to add movie to favorites */}
      <button
        onClick={() => {
          console.log('Adding to favorites:', movie.Title); // Debugging: log adding movie to favorites
          addToFavorites(movie); // Call the function to add movie to favorites
        }}
        className="mt-3 w-full text-sm bg-red-500 px-4 py-2 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
      >
        Add to Favorites
      </button>
    </div>
  );
};

export default MovieCard;
