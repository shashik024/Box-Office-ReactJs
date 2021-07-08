import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ id, image, name, summary }) => {
  const summaryText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, ' ')}... `
    : 'No Description';

  return (
    <div>
      <div>
        <img src={image} alt="show" />
      </div>
      <h1>{name}</h1>
      <p>{summaryText}</p>
      <div>
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};

export default ShowCard;
