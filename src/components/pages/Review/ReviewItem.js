import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { Stars } from '../Rating/StarRating'

const ReviewItem = ({ onDelete, onEdit, review }) => (
  <article className="review-item">
    <div className="d-flex justify-content-between align-items-start gap-2">
      <div>
        <h3 className="h6 mb-1">{review.dish}</h3>
        <Stars value={review.star} />
      </div>
      <div className="review-actions">
        <button className="btn-icon" onClick={() => onEdit(review.id)} aria-label={`Edit review of ${review.dish}`}><FaEdit aria-hidden="true"/></button>
        <button className="btn-icon" onClick={() => onDelete(review.id)} aria-label={`Delete review of ${review.dish}`}><FaTrash aria-hidden="true"/></button>
      </div>
    </div>
    <p className="mt-2 mb-0">{review.review}</p>
  </article>
)

export default ReviewItem
