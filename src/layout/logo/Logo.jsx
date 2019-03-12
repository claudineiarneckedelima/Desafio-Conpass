import React, { Component } from 'react';
import './Logo.css'
import logo from '../../assets/imgs/compass.png';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
    render() {
        return (
            <aside className="logo">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>
            </aside>
        )

    }
    

}