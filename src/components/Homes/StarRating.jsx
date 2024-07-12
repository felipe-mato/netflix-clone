/* eslint-disable react/prop-types */

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  const stars = Array(fullStars).fill(<i className='fa fa-star'></i>);
  if (halfStar) {
    stars.push(<i className='fa fa-star-half'></i>);
  }

  return (
    <div className="star-rating">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default StarRating;
