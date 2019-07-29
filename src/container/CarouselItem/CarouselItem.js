import React, { Component } from 'react';
class CarouselItem extends Component {

    render() {
        return (
            <div class={"carousel-item" + (this.props.active ? ' active' : '')}>
                <img src={this.props.article.urlToImage} class="d-block w-100" style={{ height: "500px" }} alt="..." />
                <div class="carousel-caption  d-md-block">
                    <h5>{this.props.article.title}</h5>
                    <p>{this.props.article.description}</p>
                </div>
            </div>
        );
    }
}

export default CarouselItem;