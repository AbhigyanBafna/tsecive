import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // Dummy recent searches and suggestions
  const recentSearches = ['CNS Papers', 'ReactJS', 'NodeJS'];
  const suggestions = ['Steganography', 'Dynamic Programming', 'Greedy Algorithms'];

  return (
    <div className="w-full max-w-4xl mx-auto mt-32">
      <div className="relative shadow-md rounded-lg">
        <input
          className="peer w-full h-16 pl-6 pr-12 text-base text-gray-700 bg-white rounded-lg focus:outline-none focus:shadow-lg focus:border-blue-300 border border-transparent"
          type="text"
          id="search"
          placeholder="Search something..."
          value={query}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute right-3 top-0 h-16 w-12 flex items-center justify-center text-black animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {showDropdown && (
          <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="text-gray-600 text-sm p-2">Recent Searches</div>
            <ul>
              {recentSearches.map((item, index) => (
                <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-gray-600 text-sm p-2">Suggestions</div>
            <ul>
              {suggestions.map((item, index) => (
                <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
