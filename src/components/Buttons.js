import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

export class Buttons extends Component {
    render() {
        return (
            <div className="row font-weight-bolder" id="buttons">
                <div className="col-md-4 mt-3">
                    <Link to = '/work' className="btn btn-outline-secondary">
                        WORK
                    </Link>
                </div>
                <div className="col-md-4 mt-3
                ">
                <Link to ='/portfolio' className="btn btn-outline-secondary">
                        ABOUT
                    </Link>
                </div>
                <div className="col-md-4 mt-3">
                <Link to= '/Contact' className="btn btn-outline-secondary">
                        CONTACT
                    </Link>
                </div>
            </div>
        )
    }
}

export default Buttons
