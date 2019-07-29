import React, { Component } from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';
import { createCarouselData } from '../../helper/newsHelper';

class Carousel extends Component {

    render() {
        let a = createCarouselData(this.props.carouselData);
        if (this.props.carouselData.length > 0) {
            return (
                <div class="container">
                    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol>
                        <div class="carousel-inner">
                            {

                                a.map(article => {
                                    return <CarouselItem active={article.active}  {...this.props} article={article.article}
                                        key={article.article.url} />
                                })
                            }
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>

            );
        } else {
            return <h3 className="text-center">loading...</h3>;
        }
    }
}

export default Carousel;




// <div class="carousel-inner">
// <div class="carousel-item active">
//     <img src="assets/img-thumb-3.jpg" class="d-block w-100" style={{ height: "500px" }} alt="..." />
//     <div class="carousel-caption  d-md-block">
//         <h5>First slide label</h5>
//         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </div>
// </div>
// <div class="carousel-item">
//     <img src="assets/img-thumb-3.jpg" class="d-block w-100" style={{ height: "500px" }} alt="..." />
//     <div class="carousel-caption d-none d-md-block">
//         <h5>Second slide label</h5>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </div>
// </div>
// <div class="carousel-item">
//     <img src="assets/img-thumb-3.jpg" class="d-block w-100" style={{ height: "500px" }} alt="..." />
//     <div class="carousel-caption d-none d-md-block">
//         <h5>Third slide label</h5>
//         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </div>
// </div>
// </div>




//<CarouselItem active={true}  {...this.props} />
//<CarouselItem active={false} {...this.props} />
//<CarouselItem active={false} {...this.props} />
//<CarouselItem active={false} {...this.props} />