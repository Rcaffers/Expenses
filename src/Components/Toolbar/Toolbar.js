import React from 'react';
import NavigationItems from './Navigation/NavigationItems/NavigationItems';
import classes from '../../Css/Toolbar.module.css'

const Toolbar = (props) => (
    <div className={classes.Toolbar}>
        <NavigationItems />
    </div>
);

export default Toolbar;