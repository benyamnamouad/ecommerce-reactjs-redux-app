import React,{Component} from 'react';
import {connect} from 'react-redux';
import {unsaveProductToFavorite} from "../actions/index";
import QuantityButtons from "./buttons/QuantityButtons";


class ProductListCard extends Component {
    render(){
        const {product} = this.props;
        return(
            <article className="card card-product card-product-custom pb-1">
                <div className="card-body">
                    <div className="row">
                        <aside className="col-sm-3">
                            <div className="img-wrap"><img src={product.main_image}/></div>
                        </aside>
                        <article className="col-sm-6">
                            <div className="card-title">{product.name}</div>

                            <dl className="row">
                                <dt className="col-sm-3">Ref:</dt>
                                <dd className="col-sm-9">{product.reference}</dd>
                            </dl>

                            <button onClick={()=> {this.props.onRemove(product);this.props.unsaveProductToFavorite(product.id)}} className="btn btn-info p-1"><i className="mdi mdi-delete-sweep"> </i>
                                Suprimer du Favouris </button>

                        </article>
                        <aside className="col-sm-3 border-left">
                            <div className="action-wrap">
                                <div className="price-wrap h4">

                                    <span className="price"> {product.default_price} DZD </span>

                                </div>

                                <br/>
                                <QuantityButtons
                                    size={2}
                                    quantity={4}
                                    productId={product.id}
                                    price={product.default_price}
                                />


                            </div>
                        </aside>
                    </div>
                </div>
            </article>
        )
    }
}

export default connect(null,{unsaveProductToFavorite})(ProductListCard);