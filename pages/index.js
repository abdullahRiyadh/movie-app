import { useEffect, useState, useContext, useCallback } from 'react'; // Import necessary hooks from React
import SearchForm from '../components/SearchForm'; // Import the SearchForm component
import MovieCard from '../components/MovieCard'; // Import the MovieCard component
import LoadSpinner from '../components/LoadSpinner'; // Import the loading spinner component
import { MovieContext } from '../context/MovieContext'; // Import the MovieContext for managing global state
import Footer from '../components/Footer'; // Import the footer component

const IndexPage = () => {
  // State variables for query, movies, and loading status
  const [query, setQuery] = useState(''); // To store the search query input by the user
  const [movies, setMovies] = useState([]); // To store the list of fetched movies
  const [loading, setLoading] = useState(false); // To manage loading state

  // Access the context methods for adding to favorites and search history
  // const { addToFavorites, addToSearchHistory } = useContext(MovieContext);

  // Function to search movies based on user input, memoized with useCallback
  const searchMovies = useCallback((searchQuery) => {
    console.log('Searching for movies with query:', searchQuery); // Debugging log for search query
    setLoading(true); // Set loading to true when starting a search

    // Fetch movies from the OMDb API
    fetch(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${searchQuery}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok'); // Handle network errors
        }
        return res.json(); // Parse the response as JSON
      })
      .then(data => {
        console.log('Fetched movies:', data); // Log fetched movies for debugging
        setMovies(data.Search || []); // Update movies state or set to empty array if no results
        addToSearchHistory(searchQuery); // Add the search query to history
        setLoading(false); // Set loading to false after fetching data
      })
      .catch((error) => {
        console.error('Error fetching movies:', error); // Log any errors encountered
        setLoading(false); // Ensure loading state is reset
      });
  }, [addToSearchHistory]); // Add addToSearchHistory as a dependency

  // Effect to perform an initial search when the component mounts
  useEffect(() => {
    searchMovies('batman'); // Example search term for initial fetch
  }, [searchMovies]); // Dependency on searchMovies to avoid stale closures

  return (
    <div>
      {/* Search form with query and search function passed as props */}
      <SearchForm query={query} setQuery={setQuery} searchMovies={searchMovies} loading={loading} />
      {/* Conditional rendering based on loading state */}
      {loading ? (
        <LoadSpinner /> // Show loading spinner if data is being fetched
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.length > 0 ? (
            movies.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} /> // Map through movies to display MovieCard for each
            ))
          ) : (
            <p>No movies found!</p> // Message if no movies are found
          )}
        </div>
      )}
      <Footer /> {/* Footer */}
    </div>
  );
};

export default IndexPage; // Export the IndexPage component
