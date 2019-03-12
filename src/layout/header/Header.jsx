import React, { Component } from 'react';
import './Header.css'

export default class Home extends Component {
    render() {
        return (
            <header className="header d-none d-sm-flex flex-column">
                <h1 className="mt-3">
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.title}
                </h1>
                <p className="lead text-muted">{this.props.subtitle}</p>
            </header>
        )
    }
}