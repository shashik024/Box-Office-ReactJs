import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetApiResult } from '../Misc/Config';

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);

  useEffect(() => {
    GetApiResult(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results =>
      setShow(results)
    );
  }, [id]);

  console.log('show', show);

  return (
    <div>
      <h1>This is my show</h1>
    </div>
  );
};

export default Show;
