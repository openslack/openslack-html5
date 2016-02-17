/**
 * Created by ff_li on 2016/2/17.
 */
import React, { Component, PropTypes } from 'react'

export default class ProductsList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}