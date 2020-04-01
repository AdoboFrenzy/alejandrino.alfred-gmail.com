import PRODUCTS from '../../data/dummy-data';

const initialState = {
    availableProducts = PRODUCTS,
    userProducts = PRODUCTS.filter(product => product.ownderId == 'u1 ')
};

const productsReducer = (state = initialState, action) => {
    switch(action.type) {

        case '':
            return state;

        default:
            return state;
    }
}

export default productsReducer;