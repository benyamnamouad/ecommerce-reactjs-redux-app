import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {addToCart} from "../../actions/index";



class QuantityButtons extends Component{
    constructor(props){
        super(props);
        this.state={quantity:this.props.quantity}
    }

    quantityButton(type,productId,quantity,price){
        this.props.addToCart(productId,quantity,price);
        this.setState(prevState => {
            return {quantity: type == 'add' ? prevState.quantity + 1: prevState.quantity - 1}
        });

        console.log(this.state.quantity);

    }




    render(){
        return(
            <div className="row">
                <div className=" col-sm-12">
                    <div className="input-group">
                                    <span className="input-group-btn ">
                                        <button onClick={this.quantityButton.bind(this,'sub')} type="button" className={`quantity-left-minus p-${this.props.size} btn btn-danger btn-number border-radius-0`}
                                                data-type="minus" data-field="">
                                            <span><i className="fas fa-minus"> </i></span>
                                        </button>
                                    </span>
                        <input type="text" id="quantity" name="quantity"
                               className={`text-center form-control input-number p-${this.props.size} qnt-input`}  value={this.state.quantity}  />

                        <span className="input-group-btn">
                                        <button onClick={this.quantityButton.bind(this,'add',this.state.quantity,this.props.productId,this.props.price)}  type="button" className={`p-${this.props.size} quantity-right-plus btn btn-success btn-number border-radius-0`}
                                                data-type="plus" data-field="">
                                            <span><i className="fas fa-plus"> </i></span>
                                        </button>
                                    </span>
                    </div>
                </div>

            </div>
        )
    }

}

export default connect(null,{addToCart})(QuantityButtons);
