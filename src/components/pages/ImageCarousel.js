import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import f1 from './images/f1.jpg'
import f2 from './images/f2.jpg'
import f4 from './images/f4.jpg'

export default class ImageCarousel extends React.Component {
    render(){
        return(
            <div className="jumbotron-fluid container justify-content-center" 
                style={{marginTop: 10}}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={f1}
                            alt="food1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={f2}
                            alt="food2"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={f4}
                            alt="food4"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}