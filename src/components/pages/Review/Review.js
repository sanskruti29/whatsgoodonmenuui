import React, {useState} from 'react'
import {v4} from 'uuid'

import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'
import './styles.css'

const Review = () => {
    const [reviews, setReviews] = useState([])

    const [form, setForm] = useState(
        {
            star: 0,
            restaurant: "", 
            review: "", 
            id: v4()
        }
    )

    const [editing, setEditing] = useState(false)
    
    return (
        <div className="review">
            <ReviewForm 
                form={form}
                setForm={setForm}
                reviews={reviews}    
                setReviews={setReviews}
                editing={editing}
                setEditing={setEditing}
            />
            <ReviewList 
                reviews={reviews}
                setForm={setForm}
                setReviews={setReviews}
                setEditing={setEditing}
            />
        </div>
    )
}

export default Review