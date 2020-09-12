import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';

const RatingForm = ({starFieldName,  handleChange, form, setForm}) => {
    const [hover, setHover] = useState(null)
    return(
        <div>
            {[...Array(5)].map((star, i) =>{
                const ratingIndex = i + 1; //bcz array starts with 0 
                return (
                    <label>
                        <input 
                            type="radio" 
                            name={starFieldName} 
                            value={ratingIndex}
                            onClick={() => {
                                // setRating(ratingIndex)
                                setForm({...form, ["star"]: ratingIndex})
                                }
                            }   
                            onChange={e => handleChange(e)} 
                        />
                        <FaStar 
                            className="star" 
                            color={ratingIndex <= (hover || form.star) ? "#ffc107" : "#e4e5e9"} 
                            size={25}
                            onMouseEnter={() => setHover(ratingIndex)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}      
        </div>
    )
}

export default RatingForm

