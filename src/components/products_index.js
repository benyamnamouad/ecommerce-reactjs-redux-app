import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProducts,saveProductToFavorite,unsaveProductToFavorite} from "../actions/index";
import {Link} from 'react-router-dom';
import Carousel from "./Carousel";
import ProductCard from "./ProductCard"

class PostsIndex extends Component{

    componentWillMount(){
       this.props.fetchProducts();
    }

     renderPosts (){
        return this.props.products.map((product,index)=>{
           return(
              <ProductCard key={index} product={product}/>
           )
        });
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12 mx-0 px-0">
                    <Carousel/>
                    <div className="row mx-0 px-5 pt-3">
                        {this.renderPosts()}
                    </div>
                </div>
            </div>



        );
    }

}

function mapStateToProps(state) {
    return {products:state.products.all};
}
export default connect(mapStateToProps,{fetchProducts,saveProductToFavorite,unsaveProductToFavorite})(PostsIndex);