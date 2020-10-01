import React, { Component } from 'react';
import Aux from '../Aux/Aux'
import classes from '../../Css/Layout.module.css';
import Toolbar from '../../Components/Toolbar/Toolbar'
import SideDrawer from '../../Components/Toolbar/Navigation/Sidedrawer/SideDrawer';
import DrawerToggle from '../../Components/Toolbar/Navigation/Sidedrawer/DrawerToggle/DrawerToggle'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }
    
    render () {
        return (
            <Aux>
                <div className={classes.DrawerToggle}>
                    <DrawerToggle 
                        click={this.sideDrawerToggleHandler}
                        open={this.state.showSideDrawer}/>
                </div>
                <Toolbar hideAddRecieptHandler={this.props.hideAddRecieptHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerToggleHandler}
                    hideAddRecieptHandler={this.props.hideAddRecieptHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default Layout;