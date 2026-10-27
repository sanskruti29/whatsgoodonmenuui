import React from 'react'
import StarRating from '../Rating/StarRating'

const ReviewForm = ({ form, setForm, editing, onSubmit }) => {
  const handleChange = ({ target: { name, value } }) => setForm({ ...form, [name]: value })

  return (
    <form onSubmit={onSubmit}>
      <h2 className="h5">{editing ? 'Edit your review' : 'Leave a review'}</h2>
      <div className="field">
        <label htmlFor="dish">Dish</label>
        <input id="dish" name="dish" type="text" placeholder="What did you order?" autoComplete="off"
          value={form.dish} onChange={handleChange} required />
      </div>
      <div className="field">
        <span className="d-block fw-semibold small mb-1">Rating</span>
        <StarRating label="Rating" value={form.star} onChange={(star) => setForm({ ...form, star })} />
        {!form.star && <div className="muted small">Choose 1 to 5 stars.</div>}
      </div>
      <div className="field">
        <label htmlFor="review">Review</label>
        <textarea id="review" name="review" placeholder="What did you think?"
          value={form.review} onChange={handleChange} required />
      </div>
      <button className="btn-brand" type="submit" disabled={!form.star}>{editing ? 'Update review' : 'Submit review'}</button>
    </form>
  )
}

export default ReviewForm
