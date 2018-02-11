import React from 'react';
import moment from 'moment'

import Review from '../Review/Review';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

const ReviewGroup = (props) => {
  let textString;
  if (props.grouping === 'week') {
    textString = moment(props.startTime).format('ddd, DD.MM');
    textString += moment(props.startTime).add(6, 'days').format(' - DD.MM');
  } else if (props.grouping === 'month') {
    textString = moment(props.startTime).format('MMMM YYYY')
  } else {
    textString = moment(props.startTime).format('ddd, DD.MM.YYYY')
  }


  return (
    <div>
      <div styleName='time-group'>
        {textString}
      </div>
      <div styleName='reviews'>
        {
          props.reviews.map((review) => {
            return <Review
              key={review.reviewId}
              data={review}
              searchTerm={props.searchTerm}
            />
          })
        }
      </div>
    </div>
  );
        
}

export default CSSModules(ReviewGroup, styles);
 