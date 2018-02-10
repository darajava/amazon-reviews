import React from 'react';
import Star from '../Star/Star';

const StarField = (props) => {

  return (
    <div>
      <Star value={1} checked={props.stars[0]} handleChange={props.handleChange} />
      <Star value={2} checked={props.stars[1]} handleChange={props.handleChange} />
      <Star value={3} checked={props.stars[2]} handleChange={props.handleChange} />
      <Star value={4} checked={props.stars[3]} handleChange={props.handleChange} />
      <Star value={5} checked={props.stars[4]} handleChange={props.handleChange} />
    </div>
  );
        
}

export default StarField;
 