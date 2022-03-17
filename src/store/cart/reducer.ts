import { AnyAction } from "redux";
import { CART_ACTIONS } from "./constants";

export type CartStoreType = {
    size: string;
    color: string;
    favourite: boolean;
};

const initialState = {
    size: "L",
    color: "black",
    favourite: false
};

export default (
    state: CartStoreType = initialState,
    action: AnyAction
): any => {
    switch (action.type) {
        case CART_ACTIONS.UPDATE_SIZE_SUCCESS: {
            return {
                ...state,
                size: action.size
            };
        }
        case CART_ACTIONS.UPDATE_COLOR_SUCCESS:
            return {
                ...state,
                color: action.color
            };
        case CART_ACTIONS.UPDATE_FAVOURITE_SUCCESS:
            return {
                ...state,
                favourite: !favourite
            };
    }
};
