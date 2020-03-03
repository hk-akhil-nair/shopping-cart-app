import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions';

class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            availableSizeVisibilty : false,
            addToCartButtonText : 'Add to cart'
        }

        this.showAvailableSizes = this.showAvailableSizes.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    showAvailableSizes(product) {
        this.setState({ availableSizeVisibilty : true, addToCartButtonText : 'Select size' })
    }
    hideAvailableSizes() {
        this.setState({ availableSizeVisibilty : false, addToCartButtonText : 'Add to cart' })
    }

    handleAddToCart(product, size) {
        var productInfo = {
            id : this.props.cart.length+1,
            productId : product.id,
            title : product.title,
            size : size.size,
            price : product.price,
            currencyFormat : product.currencyFormat,
            image : product.src_1,
            quantity : 1
        }
        this.props.dispatch(addToCart(productInfo));
        this.setState({ availableSizeVisibilty : false, addToCartButtonText : 'Add to cart' });
    }

    render() {

        var price = this.props.product.price;

        var decimalPrice = price.toFixed(2)
        var priceSplit = decimalPrice.toString().split(".");

        var dollars = priceSplit[0];
        var cents = priceSplit[1];

        return(
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 eg-product-card">
                <div className="eg-product-image"><img src={this.props.product.src_1} alt="T-Shirt Product 101" /></div>
                <div className="eg-product-name"><h3>{this.props.product.title}</h3></div>
                <div className="eg-product-price"><p>{this.props.product.currencyFormat}<span className="dollar">{dollars}</span>.<span className="cents">{cents}</span></p></div>
                {this.props.product.isFreeShipping ? <div className="eg-product-shipping-type"><p>Free Shipping</p></div> : ''}
                <div className="eg-product-add-to-cart-container">
                    {this.state.availableSizeVisibilty ?
                        <div className="radio eg-product-sizes">
                            <button className="eg-product-sizes-cancel" onClick={() => this.hideAvailableSizes()}>&larr;</button>
                            {this.props.product.availableSizes.map(function (size, index){
                                return (
                                    <div key={index} className="single-size">
                                        <input type="radio" name="size" id={this.props.product.id.toString()+"-"+this.props.product.title.split(' ').join('-')+"-"+index.toString()} value={size} />
                                        <label onClick={() => this.handleAddToCart(this.props.product, {size})} htmlFor={this.props.product.id.toString()+"-"+this.props.product.title.split(' ').join('-')+"-"+index.toString()}>
                                            {size}
                                        </label>
                                    </div>
                                )
                            }, this)}
                        </div> : 
                        <div className="eg-product-add-to-cart">
                            <button onClick={() => this.showAvailableSizes(this.props.product)}>Add to cart</button>
                        </div>
                    }
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        cart : state.cart
    }
}

export default connect(mapStateToProps)(Product);