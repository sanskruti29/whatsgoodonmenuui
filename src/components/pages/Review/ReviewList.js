import React from 'react'
import ReviewItem from './ReviewItem'
import './styles.css'

const ReviewList = ({reviews, setReviews, setForm, setEditing}) => {
    const reviewsList = Array.from(reviews)

    //don't include the mentioned id in the array - updatedReviews
    const handleDelete = (id) => {
        const updatedReviews = reviews.filter(review => review.id !== id)
        setReviews(updatedReviews)
    }

    //return the mentioned id in the array - editedReview
    const handleEdit = (id) => {
        const editedReview = reviews.filter(review => review.id === id)
        setForm(editedReview[0]) //bcz editedReview is an array with single item so [0]
        setEditing(true)
    }

    return (
        <div className="reviewList">
            {reviewsList.map((review)=>(
                <ReviewItem 
                    key={review.id}
                    review={review}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}
        </div>
    )
}

export default ReviewList
