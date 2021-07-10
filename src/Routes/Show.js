import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetApiResult } from '../Misc/Config';

const Show = () => {
  let isMounted = true;
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetApiResult(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          setShow(results);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
        }
      });
    console.log(show);

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
