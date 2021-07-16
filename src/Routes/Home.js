import React, { useState } from 'react';
import ActorGrid from '../Components/Actor/ActorGrid';
import CustomRadioBtn from '../Components/CustomRadioBtn';
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from '../Components/Home.styled';
import MainPageComponent from '../Components/MainPageComponent';
import { ShowGrid } from '../Components/Show/ShowGrid';
import { GetApiResult } from '../Misc/Config';
import { UselastQuery } from '../Misc/CustomHooks';

/* eslint-disable */

const Home = () => {
  const [input, setInput] = UselastQuery();

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
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    } else {
      return null;
    }
  };

  const onRadioButton = e => {
    setSerchOption(e.target.value);
  };

  const searchButtonStatus = searchOption === 'shows';

  return (
    <div>
      <MainPageComponent>
        <SearchInput
          type="text"
          placeholder="Search Something here . . ."
          onChange={onInputChange}
          value={input}
          onKeyDown={onKeyDown}
        />
        <RadioInputsWrapper>
          <div>
            <CustomRadioBtn
              label="Shows"
              id="shows-search"
              value="shows"
              checked={searchButtonStatus}
              onChange={onRadioButton}
            />
          </div>
          <div>
            <CustomRadioBtn
              label="Actor"
              id="actor-search"
              value="people"
              checked={!searchButtonStatus}
              onChange={onRadioButton}
            />
          </div>
        </RadioInputsWrapper>
        <SearchButtonWrapper>
          <button type="button" onClick={onSearch}>
            Search
          </button>
        </SearchButtonWrapper>
        {showResults()}
      </MainPageComponent>

      {showResults()}
    </div>
  );
};
export default Home;
