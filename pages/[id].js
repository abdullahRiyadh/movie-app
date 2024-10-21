import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      console.log('Fetching movie details for ID:', id); // Debugging
      fetch(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&i=${id}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(data => {
          console.log('Fetched movie details:', data); // Debugging
          if (data.Response === "True") {
            setMovie(data);
          } else {
            setError(data.Error); // Handle movie not found
          }
        })
        .catch(err => {
          console.error('Fetch error:', err);
          setError(err.message); // Set error state
        });
    }
  }, [id]);

  if (error) return <p>Error: {error}</p>; // Display error message
  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl mb-5">{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} className="w-64 h-96 object-cover rounded" />
      <p>{movie.Plot}</p>
      <p>Released: {movie.Released}</p>
      <p>Rating: {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;
