import React, { useState, useEffect } from 'react';
import MainPageComponent from '../Components/MainPageComponent';
import { GetApiResult } from '../Misc/Config';
import { useShows } from '../Misc/CustomHooks';
import { ShowGrid } from '../Components/Show/ShowGrid';

const Starred = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => GetApiResult(`/shows/${showId}`));

      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);
  return (
    <MainPageComponent>
      {isLoading && <div>Shows are still Loading. . .</div>}
      {error && <div>Error Occured ! {error}</div>}
      {!isLoading && !shows && <div>No Shows were added !</div>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </MainPageComponent>
  );
};

export default Starred;
