import { addCartInfo } from "helpers/filters";
import { AnyAction } from "redux";
import { CART_ACTIONS } from "./constants";

export type CartStoreType = {
    size: string;
    color: string;
    favourite: boolean;
};

const initialState = {
    size: "L",
    color: "BLACK",
    favourite: false
};

export default (
    state: CartStoreType = initialState,
    action: AnyAction
): any => {
    switch (action.type) {
        case CART_ACTIONS.UPDATE_SIZE_SUCCESS: {
            addCartInfo(action.size, state.color, state.favourite);
            return {
                ...state,
                size: action.size
            };
        }
        case CART_ACTIONS.UPDATE_COLOR_SUCCESS:
            addCartInfo(state.size, action.color, state.favourite);
            return {
                ...state,
                color: action.color
            };
        case CART_ACTIONS.UPDATE_FAVOURITE_SUCCESS:
            addCartInfo(state.size, state.color, action.result);
            return {
                ...state,
                favourite: action.result
            };
        default:
            return state;
    }
};
