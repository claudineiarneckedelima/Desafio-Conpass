import React, { Component } from 'react';
import './Footer.css'

const Footer = class App extends Component {
    render() {
        return (
            <footer className="footer">
                <span>
                    Desenvolvido com <i className="fa fa-heart text-danger"></i> por
                    <strong> Claudinei<span className="text-danger"> de </span>Lima</strong>
                </span>
            </footer>
        )
    }
}

export default Footer;
