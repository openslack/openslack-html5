/* app/constants/actionTypes.js */

import keyMirror from 'react/lib/keyMirror';

export default keyMirror({
    ADD_ITEM: null,
    DELETE_ITEM: null,
    DELETE_ALL: null,
    FILTER_ITEM: null
});

export const ADD_TO_CART = 'ADD_TO_CART'
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

// 等于
// export const ADD_ITEM = 'ADD_ITEM';
// export const DELETE_ITEM = 'DELETE_ITEM';
// export const DELETE_ALL = 'DELETE_ALL';
// export const FILTER_ITEM = 'FILTER_ITEM';