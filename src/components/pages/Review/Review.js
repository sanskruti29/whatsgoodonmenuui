import React, { useState, useEffect } from 'react'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2)

const emptyForm = () => ({ star: 0, dish: "", review: "", id: newId() })

// Reviews are stored in this browser only until the reviews API exists.
const storageKey = (restaurantId) => `reviews:${restaurantId}`

const load = (restaurantId) => {
  try {
    return JSON.parse(localStorage.getItem(storageKey(restaurantId))) || []
  } catch (e) {
    return []
  }
}

const Review = ({ restaurantId }) => {
  const [reviews, setReviews] = useState(() => load(restaurantId))
  const [form, setForm] = useState(emptyForm)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(storageKey(restaurantId), JSON.stringify(reviews))
    } catch (e) { /* storage unavailable: reviews just won't persist */ }
  }, [restaurantId, reviews])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.star) return
    setReviews(editing ? reviews.map((r) => (r.id === form.id ? form : r)) : [form, ...reviews])
    setEditing(false)
    setForm(emptyForm())
  }

  const handleEdit = (id) => {
    setForm(reviews.find((r) => r.id === id))
    setEditing(true)
  }

  const handleDelete = (id) => {
    setReviews(reviews.filter((r) => r.id !== id))
    if (form.id === id) {
      setEditing(false)
      setForm(emptyForm())
    }
  }

  return (
    <section className="panel" aria-labelledby="review-heading">
      <ReviewForm form={form} setForm={setForm} editing={editing} onSubmit={handleSubmit} />
      <h2 className="h5 mt-4" id="review-heading">Reviews ({reviews.length})</h2>
      <ReviewList reviews={reviews} onEdit={handleEdit} onDelete={handleDelete} />
    </section>
  )
}

export default Review
