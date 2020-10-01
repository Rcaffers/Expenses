import React from 'react';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import classes from '../../../../Css/SideDrawer.module.css';

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Closed];
    if (props.open) {
        attachedClasses=[classes.SideDrawer, classes.Open];
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <nav>
                <NavigationItems 
                    hideAddRecieptHandler={props.hideAddRecieptHandler}
                    closed={props.closed} />
            </nav>
        </div>
    );
};

export default SideDrawer;