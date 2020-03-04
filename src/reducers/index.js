import cartReducer from './cartReducer';
import productsReducer from './productsReducer';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    products: productsReducer,
    cart : cartReducer
})

export default reducers;