import React from 'react';
import classes from '../../../../../Css/NavigationItem.module.css';

const navigationItem = (props) => (

    <div className={classes.NavigationItem}>
         <a href={props.link}>{props.children}</a>
    </div>
);

export default navigationItem;