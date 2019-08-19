import _ from 'lodash';
import React, { Component } from 'react'


import ProductCartListCard from "../components/ProductCartListCard"

export default class Order extends Component{


    renderProduct(){
        const orderProducts =this.props.location.state[0];
        console.log(orderProducts.product);


        return orderProducts.map((orderProduct,index)=>{

            return(
                <ProductCartListCard  cartProduct={orderProduct} key={index}/>

            )

        });


    };


    render(){
        // const cartList= this.props.cartList;
        // const totatHT= this.props.cartList.priceHt;
        // const tva= (totatHT*0.19);
        // const totalTTC= (totatHT+tva);


        return (
            <div className ="w-75 mx-auto">
                {this.renderProduct()}
                {/*<div className="float-right">*/}
                    {/*<table className="table table-bordered bg-white">*/}
                        {/*<thead>*/}
                        {/*<tr>*/}
                            {/*<th>*/}
                                {/*Nombre d'article*/}
                            {/*</th>*/}
                            {/*<th>*/}
                                {/*{this.props.cartListCount}*/}
                            {/*</th>*/}

                        {/*</tr>*/}
                        {/*</thead>*/}
                        {/*<tbody>*/}
                        {/*<tr>*/}
                            {/*<td className="text-strong">*/}
                                {/*<strong>TOTAL HT:</strong>*/}
                            {/*</td>*/}
                            {/*<td>*/}
                                {/*<strong>{totatHT}</strong>*/}
                            {/*</td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                            {/*<td>*/}
                                {/*TVA 19% :*/}
                            {/*</td>*/}
                            {/*<td>*/}
                                {/*{tva}*/}
                            {/*</td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                            {/*<td className="text-strong">*/}
                                {/*<strong>TOTAL TTC:</strong>*/}
                            {/*</td>*/}
                            {/*<td>*/}
                                {/*<strong>{totalTTC}</strong>*/}
                            {/*</td>*/}
                        {/*</tr>*/}
                        {/*</tbody>*/}
                    {/*</table>*/}
                {/*</div>*/}


            </div>
        )
    }

}

