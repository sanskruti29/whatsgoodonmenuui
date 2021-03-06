import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return(
        <div className="starContainer">
            {[...Array(5)].map((star, i) =>{
                const ratingValue = i + 1; //bcz array starts with 0 
                return (
                <label>
                    <input 
                        type="radio" 
                        name="star" 
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}    
                    />
                    <FaStar 
                        className="star" 
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                        size={25}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={()=> setHover(null)}
                    />
                </label>
                );
            })}      
            <p> Rating value: {rating} </p>   
            <p> Hover value: {hover}</p>  
        </div>
    )
}

export default StarRating;