import React, { useState } from 'react';
import MainPageComponent from '../Components/MainPageComponent';
import { GetApiResult } from '../Misc/Config';

/* eslint-disable */

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSerchOption] = useState('shows');
  const onInputChange = e => {
    setInput(e.target.value);
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };

  const onSearch = () => {
    GetApiResult(`/search/${searchOption}?q=${input}`).then(searchResult =>
      setResults(searchResult)
    );
  };

  const showResults = () => {
    if (results && results.length === 0) {
      return <div>No Result Found !</div>;
    } else if (results && results.length > 0) {
      return results[0].show
        ? results.map(item => <div key={item.show.id}>{item.show.name}</div>)
        : results.map(item => (
            <div key={item.person.id}>{item.person.name}</div>
          ));
    } else {
      return null;
    }
  };

  const onRadioButton = e => {
    setSerchOption(e.target.value);
  };

  const searchButtonStatus = searchOption === 'shows';

  console.log(searchOption);

  return (
    <div>
      <MainPageComponent>
        <input
          type="text"
          placeholder="Search Something here . . ."
          onChange={onInputChange}
          value={input}
          onKeyDown={onKeyDown}
        />
        <div>
          <label htmlFor="shows-search">
            Shows
            <input
              type="radio"
              id="shows-search"
              value="shows"
              checked={searchButtonStatus}
              onChange={onRadioButton}
            />
          </label>
          <label htmlFor="actor-search">
            Actor
            <input
              type="radio"
              id="actor-search"
              value="people"
              checked={!searchButtonStatus}
              onChange={onRadioButton}
            />
          </label>
        </div>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </MainPageComponent>
      {showResults()}
    </div>
  );
};
export default Home;
