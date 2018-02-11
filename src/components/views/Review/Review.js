import React from 'react';
import moment from 'moment'

const Review = (props) => {
  let review = props.data;

  return (
    <div key={review.reviewId}>
      <hr />
      <div>
        <span>{review.stars} - </span>
        <span>{moment(review.reviewCreated).format('DD.MM.YYYY')}</span>
      </div>
      <div>{review.title}</div>
      <div>{review.content}</div>
      <hr />
    </div>
  );
        
}

export default Review;
 