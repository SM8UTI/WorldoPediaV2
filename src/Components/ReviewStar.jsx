const ReviewStar = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2;

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(
        <span key={i} className="filled-star">
          &#9733;
        </span>
      );
    } else if (i - 0.5 === roundedRating) {
      stars.push(
        <span key={i} className="half-star">
          &#9733;
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="empty-star">
          &#9733;
        </span>
      );
    }
  }

  return <div className="ReviewStar">{stars}</div>;
};

export default ReviewStar;
