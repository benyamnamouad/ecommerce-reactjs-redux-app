import _ from 'lodash';
import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchInvoices} from "../actions";
import StatusBadge from '../components/badges/StatusBadge'

import {Link} from "react-router-dom";

class Invoices extends Component{

    componentWillMount(){
        this.props.fetchInvoices();
    }

    renderOrder(){
        const invoices = this.props.invoices;

        if(!invoices) {return <div> loading ... </div>}

        return invoices.map((invoice,index)=>{
            return(
                <tr key={index}>
                    <td>#{invoice.id}</td>
                    <td>{invoice.created_at}</td>
                    <td><StatusBadge status={invoice.status}/></td>

                    <td>25</td>
                    <td>50 000 DZD </td>
                    <td>{invoice.orders.order_number} </td>
                    <td>

                    </td>

                </tr>
            )
        });

    };

    render(){
        return (
            <div className ="w-75 mx-auto">
                <table className="table bg-white">
                    <thead>
                    <tr>
                        <th>Commande</th>
                        <th>Date de commande </th>
                        <th>Etat</th>
                        <th>Total HT</th>
                        <th>Total TTC</th>
                        <th>Commande</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderOrder()}


                    </tbody>
                </table>
            </div>
        )
    }

}


function mapStateToProps(state) {

    return {
        invoices:state.invoices.all
    };
}

export default connect(mapStateToProps,{fetchInvoices})(Invoices);