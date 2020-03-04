import React from 'react';
import { connect } from 'react-redux';

import { filterProductBySize } from '../../../actions';

class SizeFilter extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            listOfSizes : ["XS", "S", "M", "ML", "L", "XL", "XXL"]
        }
    }

    handleProductFilterBySize(size, e){
        this.props.dispatch(filterProductBySize(size));
    }

    render() {
        return (
            <div>
                <p>
                    {this.state.listOfSizes.map(function (size, id) {
                        return <button key={id} onClick={(e) => this.handleProductFilterBySize({size},e)}>{size}</button>
                    }, this)}
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(SizeFilter);