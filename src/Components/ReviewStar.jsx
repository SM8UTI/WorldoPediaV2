const ReviewStar = ({ rating }) => {
  // Round the rating to the nearest 0.5 to represent half stars.
  const roundedRating = Math.round(rating * 2) / 2;

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      // Render a filled star if the current index is less than or equal to the rounded rating.
      stars.push(
        <span key={i} className="filled-star">
          &#9733;
        </span>
      );
    } else if (i - 0.5 === roundedRating) {
      // Render a half-filled star if the current index is half a star less than the rounded rating.
      stars.push(
        <span key={i} className="half-star">
          &#9733;
        </span>
      );
    } else {
      // Render an empty star for the rest of the stars.
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
