import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchBanners} from "../actions";




class Carousel extends Component{


    componentWillMount(){

        this.props.fetchBanners();
    }

    renderBanner (){
        return this.props.banners.map((banner,index)=>{

            return(

                <div key={index} className={`carousel-item ${(index==1) ? 'active':''}`} >
                    <img className="d-block w-100" src={banner.image_path} alt="First slide" />
                </div>
            )
        });
    }

    render(){
        return(
            <div id="carouselExampleIndicators" className="carousel slide col-md-12 mb-lg-5" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    {this.renderBanner()}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        )
}

}


function mapStateToProps(state) {

    return {banners:state.banners.all};

}

export default connect(mapStateToProps,{fetchBanners})(Carousel);