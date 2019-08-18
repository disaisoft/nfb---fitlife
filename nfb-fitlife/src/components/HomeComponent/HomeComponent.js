import React, { Component } from 'react'
import Shakes from '../../images/shakes.jpg';
import Yoga from '../../images/yoga.jpg'
import Correr from '../../images/correr.jpg'


export class HomeComponent extends Component {
    render() {
        return (
            
        <div className="bd-example">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Shakes} className="d-block w-100" height="" width="" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={Yoga} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src={Correr} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
        )
    }
}

export default HomeComponent;