import React from 'react'
import './styles.css'
import { FaTrash , FaEdit, FaStar} from 'react-icons/fa'

const ReviewItem = ({handleDelete, handleEdit, review}) => {
    return (
        <div className="reviewItem">
            <h2>{review.restaurant}</h2>
            {[...Array(5)].map((element, index) =>{
                const ratingIndex = index + 1; 
                return(                   
                    <FaStar 
                        className="star"
                        size={25}
                        color={(ratingIndex <= review.star) ? "#ffc107" : "#e4e5e9"} 
                    />
                )
            })} 
            <h4>{review.review}</h4>
            <div className="reviewAreaButtons">
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
