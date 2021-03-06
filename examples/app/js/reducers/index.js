/* app/reducers/index.js */
import { combineReducers } from 'redux'
import { cart, getQuantity, getAddedIds } from './cart'
import { products, getProduct } from './products'

export function getTotal(state) {
  return getAddedIds(state.cart).reduce((total, id) =>
    total + getProduct(state.products, id).price * getQuantity(state.cart, id),
    0
  ).toFixed(2)
}

export function getCartProducts(state) {
  return getAddedIds(state.cart).map(id => Object.assign(
    {},
    getProduct(state.products, id),
    {
      quantity: getQuantity(state.cart, id)
    }
  ))
}

export default combineReducers({
  cart,
  products
})