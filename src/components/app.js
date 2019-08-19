import React, { Component } from 'react';
import PostsIndex from './products_index';
import Carousel from './Carousel'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Product from './product'
import Favorite from '../views/Favorite'
import CartList from '../views/CartList'
import Orders from '../views/Orders'
import Order from '../views/Order'
import Invoices from '../views/Invoices'
import { Switch, Route } from 'react-router-dom'



export default class App extends Component {
  render() {
    return (
        <div>
            <Navbar/>

            <div className="container-fluid page-body-wrapper">
                <Sidebar/>
                <div id="content" >
                       <main>
                           <Switch>
                               <Route exact path='/' component={PostsIndex}/>
                               <Route exact path='/product/:id' component={Product}/>
                               <Route exact path='/favorite' component={Favorite}/>
                               <Route exact path='/cartlist' component={CartList}/>
                               <Route exact path='/orders' component={Orders}/>
                               <Route exact path='/order/:id' component={Order}/>
                               <Route exact path='/invoices' component={Invoices}/>

                           </Switch>
                       </main>
                </div>
            </div>
        </div>

    );
  }
}
