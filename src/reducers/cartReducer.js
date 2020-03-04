const cartReducer = (cart = [], action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            var productAlreadyExists = false;
            if(cart.length>0){
                let addedCartProducts = cart.filter(product => {
                    if(product.productId === action.payload.productId){
                        if(product.size === action.payload.size){
                            productAlreadyExists = true;
                            product.quantity++;
                        }
                    }
                    return product;
                })
                if(!productAlreadyExists){
                    return [...cart, action.payload]
                }else{
                    return addedCartProducts;
                }
            }else{
                return [...cart, action.payload]
            }
        case 'REMOVE_FROM_CART':
            let refreshedCart = cart.filter(product => {
                return product.id !== action.payload.id
            })
            return refreshedCart;
        case 'UPDATE_PRODUCT_DETAILS_IN_CART':
            if(action.payload.quantity<=0){
                let refreshedCartWithNoZeroQtyProduct = cart.filter(product => {
                    return product.id !== action.payload.productId
                })
                return refreshedCartWithNoZeroQtyProduct;
            } else {
                let updateCartProducts = cart.filter(product => {
                    if(product.id === action.payload.productId){
                        product.quantity = action.payload.quantity
                    }
                    return product;
                })
                return updateCartProducts;
            }
        default:
            return cart;
    }
}

export default cartReducer;