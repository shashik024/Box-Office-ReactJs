/* eslint-disable no-underscore-dangle */
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import ShowMainData from '../Components/Show/ShowMainData';
import Details from '../Components/Show/Details';
import { GetApiResult } from '../Misc/Config';
import Seasons from '../Components/Show/Seasons';
import Cast from '../Components/Show/Cast';

const Show = () => {
  let isMounted = true;
  const { id } = useParams();

  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // A reducer is a function that will return a new state , it takes two arguments current or prevState & action

  // action are objects that has type and data
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return {
          show: action.show,
          isloading: false,
          error: null,
        };
      case 'FETCH_FAILED':
        return {
          ...prevState,
          show: action.error,
        };
      default:
        return prevState;
    }
  };

  const initialState = {
    show: null,
    isLoading: true,
    error: null,
  };

  const [{ isLoading, show, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  console.log('show', show);

  useEffect(() => {
    GetApiResult(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', show: results });
        }
      })
      .catch(err => {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAILED', error: err.message });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }

  if (error) {
    return <div>Error Occured ! {error}</div>;
  }

  return (
    <div>
      <ShowMainData
        image={show.image}
        name={show.name}
        summary={show.summary}
        rating={show.rating}
        tags={show.genres}
      />

      <div>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </div>

      <div>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </div>

      <div>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </div>
    </div>
  );
};

export default Show;
