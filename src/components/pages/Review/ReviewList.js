import React from 'react'
import ReviewItem from './ReviewItem'

const ReviewList = ({ reviews, onEdit, onDelete }) => {
  if (reviews.length === 0) {
    return <p className="empty mb-0">No reviews yet. Be the first to say what's good.</p>
  }
  return (
    <div>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default ReviewList
