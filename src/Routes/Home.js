import React, { useState } from 'react';
import MainPageComponent from '../Components/MainPageComponent';

/* eslint-disable */

const Home = () => {
  const [input, setInput] = useState('');
  const [results , setResults] = useState(null)
  const onInputChange = e => {
    setInput(e.target.value);
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };

  const onSearch = () => {
    fetch(` http://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(searchResults => {
        setResults(searchResults);

        console.log(searchResults);
      }
      );
  };

  const showResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>
    }
    else if (results && results.length > 0) {
      return results.map((item) => <div key={item.show.id}>{item.show.name}</div>)
    }
    else {
      return null
    }
  }

  return (
    <div>
      <MainPageComponent>
        <input
          type="text"
          onChange={onInputChange}
          value={input}
          onKeyDown={onKeyDown}
        />
        <button type="button" onClick={onSearch}>
          Search
        </button>
        {showResults()}
      </MainPageComponent>

    </div>
  );
};
export default Home;
