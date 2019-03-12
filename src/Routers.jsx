import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from './pages/home/Home';

const Routers = class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/contato' component={Home} />
                <Redirect from='*' to='/' />
            </Switch>
        )
    }
}

export default Routers;