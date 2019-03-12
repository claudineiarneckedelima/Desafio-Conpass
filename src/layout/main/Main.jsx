import React, { Component } from 'react';
import './Main.css'

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="content conteiner-fluid">

                    <div className="p-3 mt-3">
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
