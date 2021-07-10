import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { GetApiResult } from '../Misc/Config';

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

  useEffect(() => {
    GetApiResult(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', show: results });
        }
      })
      .catch(err => {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAILED', show: err.message });
        }
      });

    console.log('show', show);

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
      <h1>This is my show</h1>
    </div>
  );
};

export default Show;
