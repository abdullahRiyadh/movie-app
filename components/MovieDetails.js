import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      console.log('Fetching movie details for ID:', id); // Debugging movie ID
      fetch(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&i=${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          console.log('Movie data fetched:', data); // Debugging fetched movie data
          if (data.Response === "True") {
            setMovie(data);
          } else {
            setError(data.Error); // Set error if movie not found
          }
        })
        .catch((err) => {
          console.error('Fetch error:', err);
          setError(err.message); // Set error state
        });
    }
  }, [id]);

  if (error) return <p className="text-red-500">Error: {error}</p>; // Display error message
  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold mb-5 text-center text-gray-200">{movie.Title}</h1>
      <div className="flex flex-col items-center sm:flex-row sm:justify-center">
        <img 
          src={movie.Poster} 
          alt={movie.Title} 
          className="w-64 h-96 object-cover rounded-lg shadow-lg mb-5 sm:mb-0 sm:mr-5 sm:w-72 sm:h-108 md:w-80 md:h-120 lg:w-96 lg:h-144" 
        />
        <div className="text-center sm:text-left p-5">
          <p className="text-lg text-gray-300">{movie.Plot}</p>
          <p className="mt-2 text-gray-400"><strong>Released:</strong> {movie.Released}</p>
          <p className="text-gray-400"><strong>Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
