import React, { useState } from 'react';
import MainPageComponent from '../Components/MainPageComponent';

/* eslint-disable */

const Home = () => {
  const [input, setInput] = useState('');
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
      .then(result => console.log(result));
  };

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
      </MainPageComponent>
    </div>
  );
};
export default Home;
