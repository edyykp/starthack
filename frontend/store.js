import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// import Cookie from 'js-cookie';
// import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from './reducers/productReducers';
// import {cartReducer} from './reducers/cartReducers';
// import { userSigninReducer, userRegisterReducer, userConfirmReducer, userUpdateReducer, passUpdateReducer, userContactReducer, userForgotReducer, userResetReducer } from './reducers/userReducers';
// import { orderCreateReducer, myOrderListReducer, orderListReducer, orderDeleteReducer, orderChangeStateReducer, orderDetailsReducer } from './reducers/orderReducers';

// const cartItems = Cookie.getJSON('cartItems', {sameSite: "Strict", secure: true}) || [];
// const userInfo = Cookie.getJSON('userInfo', {sameSite: "Strict", secure: true}) || null;

import {sendEmailReducer} from './reducers/dataReducer';
const initialState = { userInfo: {} };

const reducer = combineReducers({
    sendEmail: sendEmailReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;