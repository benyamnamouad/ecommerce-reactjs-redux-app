import _ from 'lodash';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchSavedProducts} from "../actions";

import ProductListCard from "../components/ProductListCard"

class Favorite extends Component{
    constructor(props){
            super(props);
            this.state={savedProducts: []}
    }


    componentWillReceiveProps(nextProps){
        this.setState({savedProducts:nextProps.savedProducts});
    }

    componentWillMount(){
        this.props.fetchSavedProducts();
    }

    onRemove = (product)=>{
        this.setState({savedProducts: _.without(this.state.savedProducts,product)});

    };



    renderProduct(){
          return this.state.savedProducts.map((product,index)=>{
              return(
                <div key={index}>
                    <ProductListCard onRemove={this.onRemove.bind(this)} product={product} key={index}/>
                </div>
              )

          });

    };


    render(){

        return (
            <div className="w-75 mx-auto">

                {this.renderProduct()}
            </div>
    )
    }

}


function mapStateToProps(state) {

    return {savedProducts:state.savedProducts.all};
}

export default connect(mapStateToProps,{fetchSavedProducts})(Favorite);