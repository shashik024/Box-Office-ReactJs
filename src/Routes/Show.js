/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useParams } from 'react-router-dom';
import ShowMainData from '../Components/Show/ShowMainData';
import Details from '../Components/Show/Details';
import Seasons from '../Components/Show/Seasons';
import Cast from '../Components/Show/Cast';
import { ShowPageWrapper, InfoBlock } from './Show.styled';
import { useShow } from '../Misc/CustomHooks';

const Show = () => {
  const { id } = useParams();
  const { isLoading, error, show } = useShow(id);

  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // A reducer is a function that will return a new state , it takes two arguments current or prevState & action

  // action are objects that has type and data

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }

  if (error) {
    return <div>Error Occured ! {error}</div>;
  }

  return (
    <ShowPageWrapper>
      <ShowMainData
        image={show.image}
        name={show.name}
        summary={show.summary}
        rating={show.rating}
        tags={show.genres}
      />

      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>

      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>

      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
