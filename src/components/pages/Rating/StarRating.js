import React, { useState, useId } from 'react'
import { FaStar } from 'react-icons/fa'

export const Stars = ({ value, size = 18 }) => (
  <span className="stars" role="img" aria-label={`${value} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((n) => (
      <FaStar key={n} size={size} className={n <= Math.round(value) ? 'star-on' : 'star-off'} aria-hidden="true" />
    ))}
  </span>
)

// Accessible radio-group star picker (keyboard: arrow keys; screen reader: "n stars").
const StarRating = ({ value, onChange, label = 'Rating' }) => {
  const [hover, setHover] = useState(null)
  const name = useId()
  return (
    <fieldset className="star-input" onMouseLeave={() => setHover(null)}>
      <legend className="visually-hidden">{label}</legend>
      {[1, 2, 3, 4, 5].map((n) => (
        <label key={n} onMouseEnter={() => setHover(n)}>
          <span className="visually-hidden">{n} {n === 1 ? 'star' : 'stars'}</span>
          <input type="radio" name={name} value={n} checked={value === n} onChange={() => onChange(n)} />
          <FaStar size={28} className={n <= (hover || value) ? 'star-on' : 'star-off'} aria-hidden="true" />
        </label>
      ))}
    </fieldset>
  )
}

export default StarRating
