import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]); // Add searchHistory state

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const addToSearchHistory = (query) => {
    setSearchHistory((prev) => [...prev, query]); // Function to add search queries to history
  };

  return (
    <MovieContext.Provider value={{ favorites, addToFavorites, searchHistory, addToSearchHistory }}>
      {children}
    </MovieContext.Provider>
  );
};
