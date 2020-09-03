import React from 'react';

const DrawerToggle = (props) => {
    
    let attachedClasses = ["DrawerToggle"];
    if (props.open) {
        attachedClasses=["DrawerToggle DrawerToggle__open"];
    }

    return (
        <div className={attachedClasses.join(' ')} onClick={props.click}>
            <div></div>
        </div>
    )
};

export default DrawerToggle;