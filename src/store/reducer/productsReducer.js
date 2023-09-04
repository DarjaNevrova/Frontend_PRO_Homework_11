const initialState = [];

export const ADD = '[PRODUCTS] ADD';
export const REMOVE = '[PRODUCTS] REMOVE';
export const DECREASE = '[PRODUCTS] DECREASE';
export const INCREASE = '[PRODUCTS] INCREASE';

export const addAction = (payload) => ({ type: ADD, payload });
export const removeAction = (payload) => ({ type: REMOVE, payload });
export const decreaseAction = (payload) => ({ type: DECREASE, payload });
export const increaseAction = (payload) => ({ type: INCREASE, payload });

export const productsReducer = (state = initialState, action) => {
    if (action.type === ADD) {
        const newProduct = { id: Date.now(), ...action.payload };
        return [...state, newProduct];
    } else if (action.type === REMOVE) {
        return state.filter(item => item.id !== action.payload);
    } else if (action.type === DECREASE) {
        return state.map(item => {
            if (item.id === action.payload) {
                item.price = Math.max(0, item.price - 1);
            }
            return item;
        });
    } else if (action.type === INCREASE) {
        return state.map(item => {
            if (item.id === action.payload) {
                item.price++;
            }
            return item;
        });
    }
    return state;
};