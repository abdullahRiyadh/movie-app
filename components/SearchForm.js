import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

const SearchForm = ({ query, setQuery, searchMovies }) => {
  return (
    <div className="flex justify-center my-5">
      <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2">
        <SearchBar query={query} setQuery={setQuery} searchMovies={searchMovies} />
      </div>
    </div>
  );
};

// Adding prop types for better validation
SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired,
};

export default SearchForm;
