import React, { Component } from 'react';
import Aux from '../Aux/Aux'
import classes from '../../Css/Layout.module.Css';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default Layout;