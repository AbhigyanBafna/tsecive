import React, { useState, useEffect } from 'react';
import { client } from '../../sanity/lib/client';
import { searchPosts } from '../utils/queries';
import Link from 'next/link';

const Search = () => {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function postFinder(query) {
    try{
    // Replace with actual Sanity query to fetch post data
    const data = await client.fetch(searchPosts(query))
    // Use the data to set the searchResults state
    console.log(data);

    // Use the postTitle from each item in the data
    const results = data.map((item) => item);

      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (query) {
      setIsLoading(true);

      postFinder(query)
        .then(() => {
          setIsLoading(false);
          setShowDropdown(true);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    } else {
      setShowDropdown(false);
    }
  }, [query]);

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
            <div className="text-gray-600 text-sm p-2">Search Results</div>
            <ul>
            {searchResults.map((item, index) => (
              <Link key={index} href={`/home/${item.branch.toLowerCase()}/${item.sem}/${item.subject[0].slug.current}`}>
                <div className="p-2 hover:bg-gray-200 cursor-pointer">
                  {item.postTitle}
                </div>
              </Link>
            ))}
            </ul>
            {/* <div className="text-gray-600 text-sm p-2">Suggestions</div>
            <ul>
              {suggestions.map((item, index) => (
                <Link key={index} className="p-2 hover:bg-gray-200 cursor-pointer" href={'item?.slug'}>
                  {item.postTitle}
                </Link>
              ))}
            </ul> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
