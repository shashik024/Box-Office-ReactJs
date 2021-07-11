import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from '../styled';

import { StyledShowCard } from './ShowCard.styled';

const ShowCard = ({ id, image, name, summary, onStarClick, isStarred }) => {
  const summaryText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, ' ')}... `
    : 'No Description';

  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>
      <h1>{name}</h1>
      <p>{summaryText}</p>
      <div className="btns">
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button" onClick={onStarClick}>
          <Star active={isStarred} />
        </button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
