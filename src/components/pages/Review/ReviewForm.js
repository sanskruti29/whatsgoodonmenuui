import React from 'react'
import {v4} from 'uuid'
import './styles.css'

const ReviewForm = ({form, setForm, reviews, setReviews, editing, setEditing}) => {

    const handleChange = (event) => {
        const {name, value} = event.target
        setForm({ ...form, [name] : value })
        //when you type restaurant name and you then got to type review you don't want the restaurant name to disappear 
        //and hence spread operator is used to make the rest of the form to stay the same
        //setReview = form['restaurant'] = stuff I typed
    }

    //form submit
    const handleSubmit = (event) => {
        event.preventDefault() //stops page refresh on submit
        setReviews([ ...reviews, form])
        setForm({ restaurant: "", review: "", id: v4()})
    }

    //editing the review, updates the review 
    const handleUpdate = (event) => {
        event.preventDefault()
        setEditing(false)
        const updatedReviews = reviews.map(review => review.id === form.id ? form : review)  
        setReviews(updatedReviews)
        setForm({ restaurant: "", review: "", id: v4()})
    }

    return (
        <form className="form" onSubmit={editing ? handleUpdate : handleSubmit}>
            <h2>Leave a Review</h2>
            <label htmlFor="restaurant"> Restaurant </label>
            <input
                type="text"
                placeholder="Restaurant name"
                id="restaurant"
                name="restaurant"
                autoComplete="off"
                value={form.restaurant}
                onChange={handleChange}
                required
            />
            <label htmlFor="review"> Restaurant </label>
            <textarea
                placeholder="What did you think?"
                id="review"
                name="review"
                value={form.review}
                onChange={handleChange}
                required
            />
            <button 
                type="submit"
            > 
                {editing ? "Update" : "Submit"}
            </button>
        </form>
    )
}

export default ReviewForm