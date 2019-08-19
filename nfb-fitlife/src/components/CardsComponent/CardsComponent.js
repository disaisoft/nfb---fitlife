import React, { Component } from 'react';



export class Cards extends Component {
    render(){
        return(
        <div className="container">
                <div className="">
                    <div class="card text-center border border-info">
                        <div class="card-header border border-info">
                            <h1>Empezamos</h1>
                        </div>
                        <div class="card-body">
                            
                            <h5 class="card-title">Como Registraste En La Plataforma</h5>
                            <p class="card-text">acá va a ir un video</p>
                            <a href="#" class="btn btn-info">¡Ver Video!</a><br/>
                            
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default Cards;