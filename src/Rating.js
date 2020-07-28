import React, { useState } from 'react';
import BeautyStars from 'beauty-stars';

const Rating = ({handleRating, rateApp}) => {


    return (
      <BeautyStars
        value={rateApp}
        onChange={rating => handleRating(rating)}
      />
    );
} 
export default Rating;