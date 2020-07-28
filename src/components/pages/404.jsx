import React from "react";
import error404 from './images/404.png'
import './Styles.css';

const NotFoundPage = () => {
    return(
        <div className="error404Container">
            <div className="error404">
                <h5 className="h5tag">The page you’re looking for cannot be found.</h5>
                <img className="error404img" src={error404} alt="error-404"/>
            </div>
        </div>
    );
};

export default NotFoundPage;