import React,{Component} from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from "../actions";
import QuantityButtons from "./buttons/QuantityButtons"


class ProductCartListCard extends Component {

    removeFromCart(id){
        console.log(id);
        this.props.removeFromCart(id);
    }

    render(){
        const {cartProduct} = this.props;
        const {product} = this.props.cartProduct;
        return(
            <article className="card card-product card-product-custom ">
                <div className="card-body">
                    <div className="row">
                        <aside className="col-sm-6">
                            <div className="row">
                                <div className="img-wrap col-4"><img src={product.main_image}/></div>
                                <div className="col-8">
                                    <p className="card-title"> {product.name}</p>
                                    <button onClick={()=>{this.removeFromCart(product.id)}} className="btn btn-info p-1"><i className="mdi mdi-delete-sweep"> </i>
                                        Suprimer du Cart </button>
                                </div>

                            </div>
                        </aside>

                        <aside className="border-left col-2">
                            <div className="col-12 p-0 text-center mb-2" >Quantite </div>

                            <QuantityButtons
                                size={1}
                                quantity={cartProduct.quantity}
                                productId={cartProduct.product_id}
                                price={cartProduct.product_price}
                            />

                        </aside>
                        <aside className="border-left col-2">
                            <div className="col-12 p-0">Prix Unitaire </div>
                            <div className="col-12 p-0 mt-2">{product.default_price} DA </div>
                        </aside>
                        <aside className="col-sm-2 border-left">
                            <div className="col-12 p-0">Total </div>
                            <div className="col-12 p-0 mt-2">{product.default_price*cartProduct.quantity} DA </div>
                        </aside>
                    </div>
                </div>
            </article>
        )
    }
}

export default connect(null,{removeFromCart})(ProductCartListCard);