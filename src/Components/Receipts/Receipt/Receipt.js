import React from 'react';
import Aux from '../../../Hoc/Aux/Aux';

const Receipt = (props) => (
    <Aux>
        <div className="ReceiptCardContainer">
            <div className="ReceiptCardContainer2">
                <div className="Shop">
                    Shop: {props.shop}
                </div>
                <div className="Date">
                    Date: {props.date}
                </div>
                <div className="ButtonContainer">
                    <button className="Button" onClick={props.delete}>x</button>
                </div>
            </div>
            <div className="ReceiptCardContainer3">    
                <div className="Item">
                    Item: {props.item}
                </div>
                <div className="Price">
                    Price: {props.price}
                </div>
            </div>
        </div>
    </Aux>
    );

export default Receipt;