import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchProduct} from "../actions";
import HeartButton from "./buttons/HeartButton";

class Product extends Component{

    componentWillMount(){

        this.props.fetchProduct(this.props.match.params.id);


    }

render(){


    const product = this.props.location.state;
    // const props == this.props.post

    if(!product){
        return <div> Loading ...</div>
    }

     return(
         <div className="px-5 py-5 container">

             <div className="card">
                 <div className="row no-gutters">
                     <aside className="col-sm-5 border-right">
                         <article className="gallery-wrap">
                             <div className="img-big-wrap">
                                 <div><a href={product.images[0]} data-fancybox=""><img src={product.images[0]}/></a>
                                 </div>
                             </div>

                             <div className="img-small-wrap">
                                 <div className="item-gallery"><img src={product.images[0]}/></div>
                                 <div className="item-gallery"><img src={product.images[1]}/></div>
                                 <div className="item-gallery"><img src={product.images[2]}/></div>
                                 <div className="item-gallery"><img src="../../style/images/items/4.jpg"/></div>
                             </div>

                         </article>

                     </aside>
                     <aside className="col-sm-7">
                         <article className="p-5">
                             <div className="row">
                                 <div className="col-10">
                                     <h3 className="title mb-3">{product.name}</h3>
                                 </div>
                                 <div className="col-2">
                                     <HeartButton product={product} size={3}/>


                                 </div>
                             </div>

                             <div className="mb-3">
                                 <var className="price h3 text-warning">
                                     <span className="currency">DZD</span><span className="num">{product.default_price}</span>
                                 </var>
                                 <span>HT</span>
                             </div>

                             <dl>
                                 <dt>Description</dt>
                                 <dd><p>{product.description} </p></dd>
                             </dl>
                             <dl className="row">
                                 <dt className="col-sm-3">Ref:</dt>
                                 <dd className="col-sm-9">{product.reference}</dd>



                             </dl>
                             <hr/>

                             <dl className="row">
                                 <dt className="col-sm-12 card-title">Colisage:</dt>
                                 <br/>
                                 <br/>


                                 <dt className="col-sm-3">Qauntite</dt>
                                 <dd className="col-sm-9">200</dd>

                                 <dt className="col-sm-3">Dimensions </dt>
                                 <dd className="col-sm-9">20cm x 15cm x 62cm</dd>

                                 <dt className="col-sm-3">Poids</dt>
                                 <dd className="col-sm-9">2 Kg</dd>
                             </dl>



                             <hr/>
                             <div className="row ">
                                 <div className="px-5">
                                     <div className="input-group">
                                            <span className="input-group-btn ">
                                                <button type="button" className="quantity-left-minus p-2 btn btn-danger btn-number border-radius-0"
                                                        data-type="minus" data-field="">
                                                  <span><i className="fas fa-minus"></i></span>
                                                </button>
                                            </span>
                                         <input type="text" id="quantity" name="quantity"
                                                className="form-control input-number p-2 qnt-input"   min="1" max="100"/>
                                         <span className="input-group-btn">
                                                <button type="button" className="p-2 quantity-right-plus btn btn-success btn-number border-radius-0"
                                                        data-type="plus" data-field="">
                                                    <span><i className="fas fa-plus"></i></span>
                                                </button>
                                            </span>
                                     </div>


                                 </div>


                             </div>
                             <hr/>

                                 <a href="#" className="btn  btn-outline-primary"> <i
                                     className="fas fa-shopping-cart"></i> Add to cart </a>
                         </article>
                     </aside>
                 </div>
             </div>

             <div className="my-4"></div>

             <div className="card">
                 <div className="row no-gutters p-4">

                     <dl>
                         <dt className="card-title">Pièce jointe :</dt>
                         <dd><p>{product.description} </p></dd>
                     </dl>

                     <hr/>



                 </div>
             </div>

             <div className="my-4"></div>

             <div className="card">
                 <div className="row no-gutters p-4">


                     <dl>
                         <dt className="card-title">Propriétés du produit
                         </dt>
                         <dd><p>{product.description} </p></dd>
                     </dl>


                 </div>
             </div>



             <Link  to='/'>
                 <div className="btn btn-outline-primary py-2  mt-2" ><i className="fas fa-arrow-left"></i> </div>
             </Link>
         </div>


    )}
}


function mapStateToProps(state) {
    return { product: state.products.product};
}

export default connect(mapStateToProps,{fetchProduct})(Product);