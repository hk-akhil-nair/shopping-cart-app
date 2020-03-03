import React from 'react';
import { connect } from 'react-redux';

import ProductInCart from './ProductInCart';

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
        };
        
        this.toggleCart = this.toggleCart.bind(this);
    }

    toggleCart() {
        this.setState(oldState => ({ isOpened: !oldState.isOpened }));
    }

    render() {
        const { isOpened } = this.state;

        let addedProducts = this.props.addedProducts.length ?
        (
            <ProductInCart />
        ) :
        (
            <h5>Your cart is empty.</h5>
        )

        var subtotalForAllProducts = 0;
        this.props.addedProducts.map(product => {
            var perProductPrice = (product.price)*(product.quantity);
            subtotalForAllProducts = subtotalForAllProducts + perProductPrice;
            return subtotalForAllProducts;
        })

        return (
            <div className="cart">
                <div className="cart-open">
                    <button onClick={this.toggleCart}>
                        <div className="cart-logo-count">
                            <img className="cart-logo" src="/supermarket.png" alt="Cart" width="30" />
                            {this.props.addedProducts.length>0 ? (<div className="cart-count"><p>{this.props.addedProducts.length}</p></div>) : null}
                        </div>
                    </button>
                </div>
                {isOpened ? 
                (
                    <div className="cart-view">
                        <div className="cart-title">
                            <div className="cart-logo-count">
                                <img className="cart-logo" src="/supermarket.png" alt="Cart" width="30" />
                                {this.props.addedProducts.length>0 ? (<div className="cart-count"><p>{this.props.addedProducts.length}</p></div>) : null}
                            </div>
                            <h4>Cart</h4>
                        </div>
                        <div className="cart-details" id="cart-details">
                            <ul>{addedProducts}</ul>
                        </div>
                        {this.props.addedProducts.length > 0 ?
                        <div className="cart-footer">
                            <div className="cart-subtotal">
                                <h5 className="subtotal-text">SUBTOTAL</h5>
                                <h5 className="subtotal-price">${subtotalForAllProducts.toFixed(2)}</h5>
                            </div>
                            <div className="cart-checkout"><button>Checkout</button></div>
                        </div>
                        :
                        ''}
                        <div className="cart-close">
                            <button onClick={this.toggleCart}><img src="/close.png" alt="Close Cart" /></button>
                        </div>
                    </div>
                ) : 
                null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedProducts: state.cart
    }
}

export default connect(mapStateToProps)(Cart);