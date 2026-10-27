import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { findRestaurant } from '../../data/restaurants'
import { Stars } from './Rating/StarRating'
import Review from './Review/Review'

const Restaurant = () => {
  const { id } = useParams()
  const restaurant = findRestaurant(id)

  if (!restaurant) {
    return (
      <div className="not-found">
        <h1>Restaurant not found</h1>
        <Link className="btn-brand" to="/">Back to home</Link>
      </div>
    )
  }

  const dishes = [...restaurant.dishes].sort((a, b) => b.rating - a.rating)

  return (
    <Container className="section">
      <nav aria-label="Breadcrumb" className="mb-3"><Link to="/">&larr; All restaurants</Link></nav>
      <Row className="g-4">
        <Col lg={5}>
          <img className="w-100 rounded-4 mb-3" src={restaurant.image} alt="" style={{ aspectRatio: '16 / 10', objectFit: 'cover' }} />
          <h1>{restaurant.name}</h1>
          <p className="muted">{restaurant.cuisine} &middot; {restaurant.city}</p>
          <div className="panel">
            <h2 className="h5">What's good here</h2>
            {dishes.map((dish) => (
              <div className="dish" key={dish.name}>
                <span className="dish-name">{dish.name}</span>
                <span><Stars value={dish.rating} size={16} /> <span className="muted">{dish.rating.toFixed(1)}</span></span>
              </div>
            ))}
          </div>
        </Col>
        <Col lg={7}>
          <Review restaurantId={restaurant.id} />
        </Col>
      </Row>
    </Container>
  )
}

export default Restaurant
