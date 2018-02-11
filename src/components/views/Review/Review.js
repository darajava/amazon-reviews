import React from 'react';
import moment from 'moment';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

import CSSModules from 'react-css-modules';

import styles from './styles.css';

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
        title[i] = <span styleName='highlight'>{title[i]}</span>
      }
    }

    content = content.split(new RegExp('(' + searchTerm + ')', 'i'));
    
    for (let i = 0; i < content.length; i++) {
      console.log(typeof content[i]);
      if (content[i].toUpperCase() === props.searchTerm.toUpperCase()) {
        content[i] = <span styleName='highlight'>{content[i]}</span>
      }
    }
  }

  return (
    <div styleName='container' key={review.reviewId}>
      <div styleName='heading'>
        <div styleName='fake-image' />
        <div styleName='info-holder'>
          <div styleName='info-title'>DATE</div>
          <div styleName='info-text'>
            {moment(review.reviewCreated).format('DD.MM.YYYY')}
          </div>
        </div>

        <div styleName='info-holder'>
          <div styleName='info-title'>STARS</div>
          <div styleName='info-text'>
            {Array(review.stars).fill(<Glyphicon glyph="star" />)}
            {Array(5 - review.stars).fill(<span styleName="grey"><Glyphicon glyph="star" /></span>)}
          </div>
        </div>

        <div styleName='info-holder'>
          <div styleName='info-title'>{review.reviewId}</div>
          <div styleName='info-text'>
            {review.productTitle}
          </div>
        </div>
      </div>
      <div styleName='title'>{title}</div>
      <div>{content}</div>
    </div>
  );
        
}

export default CSSModules(Review, styles);
 