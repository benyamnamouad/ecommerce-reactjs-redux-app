import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCategories} from "../actions/index";
import {Link} from 'react-router';

class Sidebar extends Component{

    componentWillMount(){

       this.props.fetchCategories();
    }

    renderCategoriesChildren(category){
        return category.children.map((category,index)=>{
                return(
                    <li className="nav-item" key={index}><a className="nav-link"
                                                            href="pages/ui-features/buttons.html">{category.name}</a></li>
                )
        });
    }

    renderCategories (){
        return this.props.categories.map((category,index)=>{

            return(
                <li className="nav-item" key={index}>
                    <a className="nav-link" data-toggle="collapse" href={`#Submenu${index}`} aria-expanded="false"
                       aria-controls="ui-basic">
                        <span className="menu-title"> {category.name}</span>
                        <i className={`${(category.hasChildren) ? 'menu-arrow':''}`}></i>
                        <i className="mdi mdi-crosshairs-gps menu-icon"></i>
                    </a>

                    <div className="collapse" id={`Submenu${index}`}>
                        <ul className={`${(category.hasChildren) ? 'nav flex-column sub-menu':''}`}>
                            {this.renderCategoriesChildren(category)}

                        </ul>
                    </div>
                </li>
            )
        });
    }



    render(){
        return(
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile">
                        <a href="#" className="nav-link">
                            <div className="nav-profile-image">
                                <img src="../../style/purple_package_style/faces/face1.jpg" alt="profile"/>
                                    <span className="login-status online"> </span>
                            </div>
                            <div className="nav-profile-text d-flex flex-column">
                                <span className="font-weight-bold mb-2">Cherif</span>
                                <span className="text-secondary text-small">Détaillant</span>
                            </div>

                        </a>
                    </li>
                    {this.renderCategories()}

                </ul>
            </nav>


        );
    }

}

// we can delete this boilarplate and just put it directly inside the connect function lik so

/* function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPosts},dispatch);
} */

function mapStateToProps(state) {

    return {categories:state.categories.all};

}

export default connect(mapStateToProps,{fetchCategories})(Sidebar);