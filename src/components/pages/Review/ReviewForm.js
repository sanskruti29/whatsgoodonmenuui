import React from 'react'
import {v4} from 'uuid'
import './styles.css'
import RatingForm from './RatingForm'

const ReviewForm = ({form, setForm, reviews, setReviews, editing, setEditing}) => {
    
    const handleChange = (event) => {
        console.log("event is: " + event + " event target is: " + event.target)
        const {name, value} = event.target
        console.log("changed value => " + name + ": " +  value)
        setForm({ ...form, [name] : value })
        //when you type restaurant name and you then got to type review you don't want the restaurant name to disappear 
        //and hence spread operator is used to make the rest of the form to stay the same
        //setReview = form['restaurant'] = stuff I typed
    }

    //form submit
    const handleSubmit = (event) => {
        event.preventDefault() //stops page refresh on submit
        setReviews([ ...reviews, form])
        setForm({ star: 0, restaurant: "", review: "", id: v4()})
    }

    //editing the review, updates the review 
    const handleUpdate = (event) => {
        event.preventDefault()
        setEditing(false)
        const updatedReviews = reviews.map(review => review.id === form.id ? form : review)  
        setReviews(updatedReviews)
        setForm({ star: 0, restaurant: "", review: "", id: v4()})
    }

    return (
        <form className="form" onSubmit={editing ? handleUpdate : handleSubmit}>
            <h2>Leave a Review</h2>
            <label htmlFor="restaurant"> Restaurant: </label>
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
            <label htmlFor="star"> Rating: </label>
            <RatingForm 
                starFieldName="star"
                handleChange={handleChange}
                form={form}
                setForm={setForm}
            />
            <label htmlFor="review"> Review: </label>
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