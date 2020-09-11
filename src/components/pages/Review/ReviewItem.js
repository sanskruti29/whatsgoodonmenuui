import React from 'react'
import './styles.css'
import { FaTrash , FaEdit} from 'react-icons/fa'

const ReviewItem = ({handleDelete, handleEdit, review}) => {
    return (
        <div className="reviewItem">
            <h2>{review.restaurant}</h2>
            <h4>{review.review}</h4>
            <div>
                <button onClick={()=>handleEdit(review.id)}>
                    <FaEdit/>
                </button>
                <button onClick={()=>handleDelete(review.id)}>
                    <FaTrash/>
                </button>
            </div>
        </div>
        
    )
}

export default ReviewItem
