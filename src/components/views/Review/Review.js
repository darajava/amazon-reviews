import React from 'react';
import moment from 'moment'

const Review = (props) => {
  let review = props.data;

  let title = review.title;
  let content = review.content;

  if (props.searchTerm.length) {
    // Escape user input regex for highlighting according to mozilla
    let searchTerm = props.searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    title = title.split(new RegExp('(' + searchTerm + ')', 'i'));
    
    for (let i = 0; i < title.length; i++) {
      console.log(typeof title[i]);
      if (title[i].toUpperCase() === props.searchTerm.toUpperCase()) {
        title[i] = <b>{title[i]}</b>
      }
    }

    content = content.split(new RegExp('(' + searchTerm + ')', 'i'));
    
    for (let i = 0; i < content.length; i++) {
      console.log(typeof content[i]);
      if (content[i].toUpperCase() === props.searchTerm.toUpperCase()) {
        content[i] = <b>{content[i]}</b>
      }
    }
  }

  return (
    <div key={review.reviewId}>
      <hr />
      <div>
        <span>{review.stars} - </span>
        <span>{moment(review.reviewCreated).format('DD.MM.YYYY')}</span>
      </div>
      <div>{title}</div>
      <div>{content}</div>
      <hr />
    </div>
  );
        
}

export default Review;
 