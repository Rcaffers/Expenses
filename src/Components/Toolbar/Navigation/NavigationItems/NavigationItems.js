import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import classes from '../../../../Css/NavigationItems.module.css';

const NavigationItems = (props) => (
        <div className={classes.NavigationItems}>
            <div onClick={props.hideAddRecieptHandler} >
                <NavigationItem>Add Receipt</NavigationItem>
            </div>
            <NavigationItem link="./">Filter</NavigationItem>
        </div>
);

export default NavigationItems;