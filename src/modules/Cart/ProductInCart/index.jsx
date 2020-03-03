import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateProductInCart } from '../../../actions';

class ProductInCart extends React.Component {

    constructor(props) {
        super(props);

        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
        this.handleIncreaseQty = this.handleIncreaseQty.bind(this);
        this.handleDecreaseQty = this.handleDecreaseQty.bind(this);
    }

    handleRemoveFromCart(product) {
        console.log("Remove from cart");
        this.props.dispatch(removeFromCart(product));
    }

    handleIncreaseQty(product){
        var newQuantity = product.quantity+1;
        var payload = {
            productId : product.id,
            quantity : newQuantity
        }
        this.props.dispatch(updateProductInCart(payload));
    }

    handleDecreaseQty(product){
        var newQuantity = product.quantity-1;
        if(newQuantity<0){
            newQuantity = 0;
        }
        var payload = {
            productId : product.id,
            quantity : newQuantity
        }
        this.props.dispatch(updateProductInCart(payload));
    }

    render() {
        return(
            this.props.addedProducts.map(product => {
                return (
                    <li key={product.id}>
                        <div>
                            <div className="cart-product-image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="cart-product-details">
                                <h5>{product.title}</h5>
                                <p>Size : {product.size}</p>
                                <p>Quantity : {product.quantity}</p>
                            </div>
                            <div className="cart-product-actions">
                                <button onClick={() => this.handleRemoveFromCart(product)}><img src="/close-dark.png" alt="x"/></button>
                                <p>{product.currencyFormat}{product.price}</p>
                                <p><button className="cart-product-reduce-qty" onClick={() => this.handleDecreaseQty(product)}>-</button><button className="cart-product-increase-qty" onClick={() => this.handleIncreaseQty(product)}>+</button></p>
                            </div>
                        </div>
                    </li>
                )
            })
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedProducts: state.cart
    }
}

export default connect(mapStateToProps)(ProductInCart);