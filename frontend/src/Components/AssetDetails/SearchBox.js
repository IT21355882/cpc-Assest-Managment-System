import React, { useState } from 'react';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to handle API call
  const fetchResults = async (searchQuery) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.example.com/search?q=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      setResults(data.items || []); // Adjust based on API response structure
    } catch (error) {
      console.error('Error fetching results:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() !== '') {
      fetchResults(value);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="container mt-4">
      <div className="form-group position-relative">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        {loading && <div className="spinner-border spinner-border-sm text-primary position-absolute end-0 mt-1 me-3" role="status"></div>}
        <ul className="list-group mt-2 position-absolute w-100" style={{ zIndex: 1000 }}>
          {results.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.name} {/* Adjust property based on API response */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;
