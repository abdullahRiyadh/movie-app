import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const HistoryPage = () => {
  const { searchHistory } = useContext(MovieContext); // Accessing search history from context
  
  console.log('Search History:', searchHistory); // Debugging output

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl mb-5">Search History</h1>
      {searchHistory && searchHistory.length > 0 ? (
        <ul className="list-disc list-inside">
          {searchHistory.map((query, index) => (
            <li key={index} className="text-lg">{query}</li> // Display each search query
          ))}
        </ul>
      ) : (
        <p>No search history available.</p> // Message when there’s no history
      )}
    </div>
  );
};

export default HistoryPage;
