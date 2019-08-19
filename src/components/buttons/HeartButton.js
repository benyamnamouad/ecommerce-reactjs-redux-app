import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {saveProductToFavorite,unsaveProductToFavorite} from "../../actions/index";
import {fetchProducts} from "../../actions";


class HeartButton extends Component{
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
        return(
            <button onClick={()=> {this.changFavoriteState(this.props.product.id)}}  className={`p-${this.props.size}  btn ${(this.state.starred) ? 'btn-outline-danger-active ':'btn-outline-danger'}`}
            > <i className="fa fa-heart"> </i></button>
        )
    }

}

export default connect(null,{saveProductToFavorite,unsaveProductToFavorite})(HeartButton);
