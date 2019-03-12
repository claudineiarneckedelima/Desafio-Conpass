import React, { Component } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = class App extends Component {
    render() {
        return (
            <React.Fragment>
                <aside className="menu-area">
                    <nav className="menu">
                        <Link to="/" id="nav1">
                            <i className="fa fa-home"> Dashboard</i>
                        </Link>
                        <Link to="/user" id="nav2">
                            <i className="fa fa-users"> Usuário</i>
                        </Link>
                        <Link to="/contato" id="nav3">
                            <i className="fa fa-users"> Contato</i>
                        </Link>
                    </nav>
                </aside>
            </React.Fragment>
        )
    }
}
export default Nav; 
