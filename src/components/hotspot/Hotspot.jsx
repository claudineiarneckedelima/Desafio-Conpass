import React, { Component } from 'react';
import './Hotspot.css'

const Hotspot = class Hotspot extends Component {
    render() {
        return (
            <div className="Hotspot">
            
            <div>{this.props.tagSelected}</div>
            </div>
        )
    }
}

export default Hotspot;