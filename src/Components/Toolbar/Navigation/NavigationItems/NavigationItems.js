import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import classes from '../../../../Css/NavigationItems.module.css';

const NavigationItems = (props) => (
        <div className={classes.NavigationItems}>
            <NavigationItem link="./">Add Receipt</NavigationItem>
            <NavigationItem link="./">Filter</NavigationItem>
        </div>
);

export default NavigationItems;