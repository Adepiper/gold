import React, { Component } from 'react'
import Buttons from './Buttons';
import './Home.css'

export class Home extends Component {
    render() {
        return (
            <div className="background">
            <div className="overlay">
            <div className="container">
              <div className="jumbotron text-center text-white">
                <div className="piper">
                    <h1>Oluwapelumi Gold </h1> 
                    <hr/>
                    <Buttons/>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

export default Home
