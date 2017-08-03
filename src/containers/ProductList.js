import React, { Component } from 'react';
import { connect } from 'react-redux'

import Product from "../components/Product";

class ProductList extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        let productsMap = this.props.products.map((product) => {
            return (
                <Product key={product.listing_id} product={product} />
            )
        })
        return (
            <ul className="ProductList">
                {productsMap}
            </ul>
        );
    }
}

const mapStateToProps = function (state) {
    console.log(state)
    if (state.currentState === 'underTwenty') {
        let filteredProducts = state.products.filter((product) => {
            return parseInt(product.price) <= 20;
        })
        return {
            products: filteredProducts
        }
    } else if (state.currentState === 'overTwenty') {
        let filteredProducts = state.products.filter((product) => {
            return parseInt(product.price) > 20;
        })
        return {
            products: filteredProducts
        }
    } else {
        return {
            products: state.products
        }
    }
}

export default connect(mapStateToProps)(ProductList);
