import React, {Component} from 'react';
import Aux from '../../Hoc/Aux/Aux';
import Receipts from '../../Components/Receipts/Receipts';
import TextInput from '../../Components/TextInput/TextInput';

class ExpenseBuilder extends Component {

    state ={
        receipts: [
            {shop: 'HMV', item: 'Oasis CD', date: '30/09/2019', price: '£30'},
            {shop: 'Morrison', item: 'Oasis CD', date: '30/09/2019', price: '£30'},
            {shop: 'Aldi', item: 'Paracetamol', date: '12/09/2020', price: '£2'},
        ],
        currentReceipt: {},
    };

    deleteReceiptHandler = (receiptIndex) => {
        const receipts = [...this.state.receipts];
        receipts.splice(receiptIndex, 1);
        this.setState({receipts: receipts})
      };

    handleInput = (e) => {
        const name=e.target.name;
        const value=e.target.value;
        const currentReceipt = this.state.currentReceipt;
        const newCurrentReceipt = {
            ...currentReceipt,
            [name]: value,
        };
        this.setState({currentReceipt: newCurrentReceipt});
    };



    handleSubmit = () => {
        this.setState({receipts: [...this.state.receipts, this.state.currentReceipt]})
    };

    render () {
        return (
            <Aux>
                {this.props.showAddReciept ?
                    <div className="inputcontainer">
                        <label className="inputheading">Add Receipt</label>
                        <TextInput
                            name="shop"
                            label="Shop:"
                            placeholder="Enter shop name"
                            onChange={this.handleInput.bind(this)}
                            className="input"
                        />
                        <TextInput
                            name="date"
                            label="Date:"
                            placeholder="Enter date"
                            onChange={this.handleInput.bind(this)}
                            className="input"
                        />
                        <TextInput
                            name="item"
                            label="Item:"
                            placeholder="Enter item"
                            onChange={this.handleInput.bind(this)}
                            className="input"
                        />
                        <TextInput
                            name="price"
                            label="Price:"
                            placeholder="Enter price"
                            onChange={this.handleInput.bind(this)}
                            className="input"
                        />
                        <button 
                            className="inputbutton"
                            onClick={this.handleSubmit.bind(this)}>Submit</button>
                    </div>
                : null}
                <Receipts 
                    receipts={this.state.receipts}
                    deleteReceipt={this.deleteReceiptHandler}
                    />
            </Aux>
        );
    };;
}

export default ExpenseBuilder;