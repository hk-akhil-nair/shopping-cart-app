import productsdata from '../modules/data';

const productsReducer = (products = productsdata, action) => {
    switch(action.type){
        case 'SORT_PRODUCTS_BY_PRICE':
            switch(action.payload){
                case 'lowest-to-highest':
                    let sortedLowestToHighestPriceProducts = products.sort((a,b) => {
                        if (a.price > b.price) return 1
                        else if (b.price > a.price) return -1
                        else return 0
                    });
                    return Array.from(sortedLowestToHighestPriceProducts);
                case 'highest-to-lowest':
                    let sortedHighestToLowestPriceProducts = products.sort((a,b) => {
                        if (a.price < b.price) return 1
                        else if (b.price < a.price) return -1
                        else return 0
                    });
                    return Array.from(sortedHighestToLowestPriceProducts);
                default:
                    return products;
            }
        case 'FILTER_PRODUCTS_BY_SIZE':
            let masterProducts = productsdata;
            let filteredProducts = masterProducts.filter(product => {
                return product.availableSizes.includes(action.payload.size) ;
            });
            return Array.from(filteredProducts);
        default:
            return products;
    }
}

export default productsReducer;