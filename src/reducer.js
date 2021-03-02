export const initialState = {
    basket: []

};

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding to basket
            return({
                ...state,
                basket: [...state.basket, action.item]
            });
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from basket
            return({state});
        default:
            return state;
    }
}

export default reducer;