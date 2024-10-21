// components/LoadSpinner.js
import React from 'react';

const LoadSpinner = () => {
  return (
    <div className="flex justify-center mx-auto min-h-screen"> {/* Center vertically and horizontally */}
      <div 
        className="animate-spin inline-block border-4 border-blue-500 border-t-transparent rounded-full" 
        style={{
          width: '2rem',  // Default width for small screens
          height: '2rem', // Default height for small screens
        }}
        aria-label="Loading..."
      />
      <style jsx>{`
        @media (min-width: 640px) { /* sm */
          div {
            width: 3rem;  /* Width for small screens and up */
            height: 3rem; /* Height for small screens and up */
          }
        }
        @media (min-width: 768px) { /* md */
          div {
            width: 4rem;  /* Width for medium screens and up */
            height: 4rem; /* Height for medium screens and up */
          }
        }
        @media (min-width: 1024px) { /* lg */
          div {
            width: 5rem;  /* Width for large screens and up */
            height: 5rem; /* Height for large screens and up */
          }
        }
      `}</style>
    </div>
  );
};

export default LoadSpinner;
