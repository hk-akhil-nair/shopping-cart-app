export const addToCart = (product) => {
    return {
        type : 'ADD_TO_CART',
        payload : product
    };
};

export const removeFromCart = (product) => {
    return {
        type : 'REMOVE_FROM_CART',
        payload : product
    };
};

export const updateProductInCart = (product) => {
    return {
        type : 'UPDATE_PRODUCT_DETAILS_IN_CART',
        payload : product
    };
};

export const sortProductByPrice = (productSortType) => {
    return {
        type : 'SORT_PRODUCTS_BY_PRICE',
        payload : productSortType
    };
};

export const filterProductBySize = (size) => {
    return {
        type : 'FILTER_PRODUCTS_BY_SIZE',
        payload : size
    };
};