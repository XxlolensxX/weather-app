import { SET_CITY } from './../actions/setCity';

export const reducer = ( state = { city: 'santiago'}, action ) => {
    switch (action.type) {
        case SET_CITY:
            return { ...state, city: action.payload }
        default:
            return state;
    }
}