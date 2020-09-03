import React from 'react';
import NavigationItems from './Navigation/NavigationItems/NavigationItems';
import classes from '../../Css/Toolbar.module.css'

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.DesktopOnly}>
            <NavigationItems />
        </div>
    </header>
);

export default Toolbar;