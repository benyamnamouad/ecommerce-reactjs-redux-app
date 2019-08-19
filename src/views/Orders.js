import _ from 'lodash';
import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchOrders} from "../actions";
import StatusBadge from '../components/badges/StatusBadge'

import ProductCartListCard from "../components/ProductCartListCard"
import {Link} from "react-router-dom";

class Orders extends Component{


    componentWillMount(){
        this.props.fetchOrders();
    }


    renderOrder(){
        const orders = this.props.orders;
        if(!orders) {return <div> loading ... </div>}

        return orders.map((order,index)=>{
           return(
               <tr key={index}>
                   <td>#{order.order_number}</td>
                   <td>{order.order_date}</td>
                   <td>{order.order_products.length}</td>
                   <td>50 000 DZD </td>
                   <td><StatusBadge status={order.status}/></td>
                   <td>
                       <Link to={
                           {
                               pathname:"/order/"+order.id,
                               state:order.order_products}
                       }> vue </Link>
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
                        <th>Nombre d'article</th>
                        <th>Montant</th>
                        <th>Etat</th>
                        <th></th>
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
        orders:state.orders.all
    };
}

export default connect(mapStateToProps,{fetchOrders})(Orders);