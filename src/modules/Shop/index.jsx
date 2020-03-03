import React from 'react';
import { connect } from 'react-redux';
import { sortProductByPrice, filterProductBySize } from '../../actions';

import Product from './Product';
import SizeFilter from './SizeFilter';

class Shop extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            listOfSizes : ["XS", "S", "M", "ML", "L", "XL", "XXL"]
        }

        this.handleProductSortByPrice = this.handleProductSortByPrice.bind(this);
        this.handleProductFilterBySize = this.handleProductFilterBySize.bind(this);
    }

    handleProductSortByPrice(e){
        this.props.dispatch(sortProductByPrice(e.target.value));
    }

    handleProductFilterBySize(size){
        this.props.dispatch(filterProductBySize(size));
    }

    render() {

        return (
            <div className="row">
                <div className="col-sm-2 eg-sizes">
                    <h4><b>Size</b></h4>
                    <SizeFilter />
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-6"><p>{this.props.products.length} Product{this.props.products.length>1 ? <span>(s)</span> : ''} found</p></div>
                        <div className="col-6 eg-order-by-filter">Order By <select onChange={(e) => this.handleProductSortByPrice(e)}><option value="default">Select</option><option value="lowest-to-highest">Lowest to highest</option><option value="highest-to-lowest">Highest to lowest</option></select></div>
                    </div>
                    <div className="row">
                        {this.props.products.map(function (product, id) {
                            return <Product key={id} product={product} />
                        }, this)}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Shop);