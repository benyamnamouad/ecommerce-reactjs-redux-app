import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCategories} from "../actions/index";
import {Link} from 'react-router';

class CategoriesIndex extends Component{

    componentWillMount(){

        this.props.fetchCategories();
    }

      renderCategoriesChildren(category){
        return category.children.map((category,index)=>{
            return(

                <li key={index}>
                    <a href="#">{category.name}</a>
                </li>

            )
        });
    }

    renderCategories (){
        return this.props.categories.map((category,index)=>{

            return(

                    <li  key={index} >
                        <a href={`#Submenu${index}`} data-toggle="collapse" aria-expanded="false" className={`${(category.hasChildren) ? 'dropdown-toggle':''}`} >
                            <i className="fas fa-home"></i>
                            {category.name}
                        </a>


                        <ul className="collapse list-unstyled" id={`Submenu${index}`}>

                            {this.renderCategoriesChildren(category)}
                        </ul>
                    </li>

            )
        });
    }



    render(){
        return(
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Bootstrap Sidebar</h3>
                    <strong>BS</strong>
                </div>


                <ul className="list-unstyled components" >
                    {this.renderCategories()}
                </ul>
                <ul className="list-unstyled CTAs">
                    <li>
                        <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download
                            source</a>
                    </li>
                    <li>
                        <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
                    </li>
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

export default connect(mapStateToProps,{fetchCategories})(CategoriesIndex);