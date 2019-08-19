import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

import { fetchCartListCount} from "../actions";

class Navbar extends Component{
    componentWillMount(){

        this.props.fetchCartListCount();
    }

    render(){
        return(
            <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <a className="navbar-brand brand-logo" href="#">YourApp</a>
                </div>

                <div className="navbar-menu-wrapper d-flex align-items-stretch">


                    <ul className="navbar-nav navbar-nav-left">
                        <li className="nav-item dropdown">
                            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#"
                               data-toggle="dropdown">
                                <i className="mdi mdi-bell-outline"></i>
                                <span className="count-symbol bg-danger"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                 aria-labelledby="notificationDropdown">
                                <h6 className="p-3 mb-0">Notifications</h6>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-success">
                                            <i className="mdi mdi-calendar"></i>
                                        </div>
                                    </div>
                                    <div
                                        className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                                        <p className="text-gray ellipsis mb-0">
                                            Just a reminder that you have an event today
                                        </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-warning">
                                            <i className="mdi mdi-settings"></i>
                                        </div>
                                    </div>
                                    <div
                                        className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
                                        <p className="text-gray ellipsis mb-0">
                                            Update dashboard
                                        </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-info">
                                            <i className="mdi mdi-link-variant"></i>
                                        </div>
                                    </div>
                                    <div
                                        className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                                        <p className="text-gray ellipsis mb-0">
                                            New admin wow!
                                        </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <h6 className="p-3 mb-0 text-center">See all notifications</h6>
                            </div>
                        </li>

                    </ul>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item nav-profile dropdown">
                            <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown"
                               aria-expanded="false">
                                <div className="nav-profile-img">
                                    <img src="../../style/purple_package_style/faces/face1.jpg" alt="image"/>
                                        <span className="availability-status online"></span>
                                </div>
                                <div className="nav-profile-text">
                                    <p className="mb-1 text-black">Cherif </p>
                                </div>
                            </a>
                            <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                                <Link to="/orders">
                                    <div className="dropdown-item" href="#">
                                        <i className=" mdi mdi-file-document mr-2 text-primary"></i>
                                        Mes commandes
                                    </div>
                                </Link>

                                <Link to="/invoices">
                                    <div className="dropdown-item" href="#">
                                        <i className="mdi mdi-file-check mr-2 text-success"></i>
                                        Mes factures
                                    </div>
                                </Link>


                                <Link to="/favorite">
                                    <div className="dropdown-item" href="#">
                                        <i className="mdi mdi-star mr-2 text-danger"></i>
                                        Mes favoris
                                    </div>

                                </Link>


                                <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-account mr-2 text-info"></i>
                                    Mon profils
                                </a>

                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    <i className="mdi mdi-logout mr-2 text-dark"></i>
                                    Signout
                                </a>
                            </div>
                        </li>


                            <li className="nav-item nav-logout d-none d-lg-block">
                                <Link to="/cartlist" className="nav-link" href="#">

                                    <i className="mdi mdi-cart-outline"></i>
                                    Mon panier
                                    <span className="ml-2 badge badge-pill badge-primary">{this.props.cartListCount}</span>
                                </Link>
                            </li>


                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                            data-toggle="offcanvas">
                        <span className="mdi mdi-menu"></span>
                    </button>
                </div>
            </nav>

    )
    }
}


function mapStateToProps(state) {
    //console.log(state.cartList);
    return {cartListCount:state.cartList.cartListCount};
}

export default connect(mapStateToProps,{fetchCartListCount})(Navbar);
