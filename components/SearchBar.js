import React from 'react';

const SearchBar = ({ query, setQuery, searchMovies }) => {
  // Capture user input and trigger search
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    searchMovies(query); // Trigger the search function with the current query
  };

  return (
    <form onSubmit={handleSearch} className="text-slate-950 my-5 flex flex-col sm:flex-row justify-center">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          console.log('Search query:', e.target.value); // Debugging query input
          setQuery(e.target.value);
        }}
        placeholder="Search movies..."
        className="px-4 py-2 border rounded w-full sm:w-64 md:w-80 lg:w-96"
      />
      <button
        type="submit" // Change to submit type
        className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
