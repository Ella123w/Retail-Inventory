import React, { Component } from 'react';
import TableInput from './TableInput/TableInput';
import TableOutput from './TableOutput/TableOutput';
import './InvoiceTableInput.scss';
class InvoiceTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lname: 'NAME',
            qtyname: 'QUANTITY',
            prcname: 'PRICE',
            name: '',
            qty: '',
            price: '',
            
        };
    }
    submitFieldHandler = () => {
       
       
    }

    render() {
        return (
            <div className="container invoice-table">
                <form className="invoice-table-form" onSubmit = {this.submitFieldHandler}>
                    <div className="columns table-inputfields">                        
                        <TableInput labelTitle = {this.state.lname} declaredValue={this.state.name} valueChanged={event => this.setState({ name: event.target.value })} />
                        <TableInput labelTitle = {this.state.qtyname} declaredValue={this.state.qty} valueChanged={event => this.setState({ qty: event.target.value })} />
                        <TableInput labelTitle = {this.state.prcname} declaredValue={this.state.price} valueChanged={event => this.setState({ price: event.target.value })} />
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="button" type="submit" value="SUBMIT" />
                        </div>
                    </div>
                    <div className="columns table-outputfields">
                       <TableOutput
                          titleName = {this.state.lname} 
                          titleQty  = {this.state.qtyname}
                          titlePrice = {this.state.prcname}/>
                    </div>
                </form>
            </div>
        );
    }

}

export default InvoiceTable;