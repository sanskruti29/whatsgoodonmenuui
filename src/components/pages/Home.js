import React, { useState, useMemo } from "react"
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { restaurants } from '../../data/restaurants'
import { Stars } from './Rating/StarRating'
import hero from './images/f3.jpg'

const average = (dishes) => dishes.reduce((sum, d) => sum + d.rating, 0) / dishes.length

const Home = () => {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return restaurants
    return restaurants.filter((r) =>
      [r.name, r.cuisine, ...r.dishes.map((d) => d.name)].some((text) => text.toLowerCase().includes(q))
    )
  }, [query])

  return (
    <>
      <section className="hero" style={{ '--hero-img': `url(${hero})` }}>
        <Container>
          <h1>Know what to order before you sit down</h1>
          <p>Dish-by-dish ratings and reviews from people who've actually eaten there.</p>
          <form className="search-bar" role="search" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search" className="visually-hidden">Search restaurants, cuisines or dishes</label>
            <input
              id="search"
              type="search"
              placeholder="Search restaurants, cuisines or dishes"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn-brand" type="submit"><FaSearch aria-hidden="true"/> Search</button>
          </form>
        </Container>
      </section>

      <Container className="section">
        <div className="section-title">
          <h2>Popular restaurants</h2>
          <span className="muted">Sample listings. Real restaurants are coming soon.</span>
        </div>
        {results.length === 0 ? (
          <div className="empty" role="status">
            No matches for "{query}". Try a different dish or cuisine, or <Link to="/addrestaurant">add the restaurant</Link>.
          </div>
        ) : (
          <Row as="ul" className="g-4 list-unstyled" aria-live="polite">
            {results.map((r) => {
              const avg = average(r.dishes)
              return (
                <Col as="li" key={r.id} sm={6} lg={3}>
                  <Link className="r-card" to={`/restaurants/${r.id}`}>
                    <img src={r.image} alt="" loading="lazy" width="640" height="400" />
                    <div className="r-card-body">
                      <h3>{r.name}</h3>
                      <div className="mb-2"><Stars value={avg} /> <span className="muted">{avg.toFixed(1)}</span></div>
                      <span className="chip">{r.cuisine}</span>
                      <div className="muted small">Top dish: {[...r.dishes].sort((a, b) => b.rating - a.rating)[0].name}</div>
                    </div>
                  </Link>
                </Col>
              )
            })}
          </Row>
        )}
      </Container>
    </>
  )
}

export default Home
