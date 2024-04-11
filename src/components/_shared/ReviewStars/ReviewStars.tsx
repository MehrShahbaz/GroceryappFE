import { useCallback, useMemo } from 'react';

type StarRatingProps = {
  rating: number;
};

const StarRating = ({ rating }: StarRatingProps): JSX.Element => {
  const fullStars = useMemo(() => Math.floor(rating), [rating]);
  const halfStars = useMemo(() => Math.ceil(rating - fullStars), [fullStars, rating]);
  const emptyStars = useMemo(() => 5 - fullStars - halfStars, [fullStars, halfStars]);
  const renderStar = useCallback(
    (filled: boolean): JSX.Element =>
      filled ? <i className="fas fa-star filled"></i> : <i className="far fa-star"></i>,
    []
  );

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`}>{renderStar(true)}</span>
      ))}
      {[...Array(halfStars)].map((_, index) => (
        <span key={`half-${index}`}>{renderStar(false)}</span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`}>{renderStar(false)}</span>
      ))}
    </div>
  );
};

export default StarRating;
