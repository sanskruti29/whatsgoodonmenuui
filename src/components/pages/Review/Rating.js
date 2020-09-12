import React, { useState } from 'react'
import RatingForm from './RatingForm'

const Rating = () => {
    const [rating, setRating] = useState(null)

    const [hover, setHover] = useState(null)
    return (
        <div>
            <RatingForm
                rating={rating}
                setRating={setRating}
                hover={hover}
                setHover={setHover}
            />
        </div>
    )
}

export default Rating
