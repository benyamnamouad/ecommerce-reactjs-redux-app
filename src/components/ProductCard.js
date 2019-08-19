import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {saveProductToFavorite,unsaveProductToFavorite} from "../actions/index";
import {fetchProducts} from "../actions";
import HeartButton from './buttons/HeartButton'
import QuantityButtons from "./buttons/QuantityButtons";



class ProductCard extends Component {

    constructor(props){
        super(props);
        this.state={starred:this.props.product.starred}
    }

    changFavoriteState(id){
        this.state.starred ?
            this.props.unsaveProductToFavorite(id) : this.props.saveProductToFavorite(id);

        this.setState({
            starred:!this.state.starred
        });
    }


    render(){
        const {product} = this.props;
        return(
            <div className="col-md-4" >
                <figure className="card card-product">
                    <Link to={
                        {
                            pathname:"/product/"+product.id,
                            state:product}
                    }
                    >
                        <div className="img-wrap-main"><img src={product.images[0]}/></div>
                    </Link>
                    <figcaption className="info-wrap">
                        <p className="desc p-0 m-0">{product.category}</p>

                        <Link to={
                            {
                                pathname:"/product/"+product.id,
                                state:product}
                        }
                        >
                            <h4 className="title">{product.name}</h4>
                        </Link>
                        <p className="desc p-0 m-0"> Ref: {product.reference}</p>

                        <div className="row">
                            <div   className="col-8">
                                <QuantityButtons
                                    size={2}
                                    quantity={4}
                                    productId={product.id}
                                    price={product.default_price}
                                />
                            </div>

                            <div className="col-4">
                                <HeartButton  product={product} size={2}/>

                            </div>

                        </div>


                    </figcaption>
                    <div className="bottom-wrap">

                        <Link to={
                            {
                                pathname:"/product/"+product.id,
                                state:product}
                        }
                        >
                            <div  className="btn btn-sm btn-info float-right">Details</div>

                        </Link>

                        <div className="price-wrap h5">
                            <span className="price-new">{product.default_price} DZ</span>
                            <del className="price-old">$1980</del>
                        </div>
                    </div>
                </figure>
            </div>


        )
    }
}

export default connect(null,{saveProductToFavorite,unsaveProductToFavorite})(ProductCard);