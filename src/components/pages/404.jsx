import React from "react";
import { Link } from 'react-router-dom'
import error404 from './images/404.png'

const NotFoundPage = () => (
  <div className="not-found">
    <h1>Page not found</h1>
    <p className="muted">The page you're looking for doesn't exist or has moved.</p>
    <Link className="btn-brand" to="/">Back to home</Link>
    <div><img src={error404} alt="" /></div>
  </div>
);

export default NotFoundPage;
