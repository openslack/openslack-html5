/* app/actions/index.js */

import { ADD_ITEM, DELETE_ITEM, DELETE_ALL, FILTER_ITEM } from '../constants/actionTypes';
import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

export function addItem(item) {
    return dispatch => {
       setTimeout(() => dispatch({type: ADD_ITEM}), 1000)
    }
}
export function deleteItem(item, e) {
    return {
       type: DELETE_ITEM,
       item
    }
}
export function deleteAll() {
    return {
       type: DELETE_ALL
    }
}
export function filterItem(e) {
    let filterItem = e.target.value;
    return {
       type: FILTER_ITEM,
       filterItem
    }
}

function receiveProducts(products) {
  return {
    type: types.RECEIVE_PRODUCTS,
    products: products
  }
}

export function getAllProducts() {
  return dispatch => {
    shop.getProducts(products => {
      dispatch(receiveProducts(products))
    })
  }
}

function addToCartUnsafe(productId) {
  return {
    type: types.ADD_TO_CART,
    productId
  }
}

export function addToCart(productId) {
  return (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
      dispatch(addToCartUnsafe(productId))
    }
  }
}

export function checkout(products) {
  return (dispatch, getState) => {
    const cart = getState().cart

    dispatch({
      type: types.CHECKOUT_REQUEST
    })
    shop.buyProducts(products, () => {
      dispatch({
        type: types.CHECKOUT_SUCCESS,
        cart
      })
      // Replace the line above with line below to rollback on failure:
      // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    })
  }
}