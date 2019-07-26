import React, { Component } from 'react';
class CarouselItem extends Component {

    render() {
        return (
            <div class={"carousel-item" + (this.props.active ? ' active' : '')}>
                <img src="assets/img-thumb-3.jpg" class="d-block w-100" style={{ height: "500px" }} alt="..." />
                <div class="carousel-caption  d-md-block">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div>
        );
    }
}

export default CarouselItem;