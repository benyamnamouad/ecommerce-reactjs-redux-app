import { combineReducers } from 'redux';


import ProductsReducer from './reducer_products'
import CategoriesReducer from './reducer_categories'
import BannersReducer from './reducer_banners'
import SavedProductsReducer from './reducer_saved_products'
import CartListReducer from './reducer_cart_list'
import OrdersReducer from './reducer_orders'
import InvoicesReducer from './reducer_invoices'

import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    products: ProductsReducer,
    categories: CategoriesReducer,
    banners: BannersReducer,
    savedProducts: SavedProductsReducer,
    cartList:CartListReducer,
    orders:OrdersReducer,
    invoices:InvoicesReducer,
    from:formReducer
});

export default rootReducer;
