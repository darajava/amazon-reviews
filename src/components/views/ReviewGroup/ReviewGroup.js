import React from 'react';
import moment from 'moment'

import Review from '../Review/Review';

const ReviewGroup = (props) => {
  return (
    <div>
      <hr />
      {props.startTime}
      ===
      {props.grouping}
        {
          props.reviews.map((review) => {
            return <Review
              key={review.reviewId}
              data={review}
              searchTerm={props.searchTerm}
            />
          })
        }
      <hr />
    </div>
  );
        
}

export default ReviewGroup;
 