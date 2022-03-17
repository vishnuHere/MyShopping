import { CART_ACTIONS } from "./constants";

export type AreaParams = {
    unitId: string;
    floorId?: string;
    buildingId?: string;
    page?: number;
    perPage?: number;
    ignorePaging?: boolean;
    sort?: number;
};

export const updateSize = (size: string) => {
    return {
        type: CART_ACTIONS.UPDATE_SIZE,
        size
    };
};

export const updateColor = (color: string) => {
    return {
        type: CART_ACTIONS.UPDATE_COLOR,
        color
    };
};

export const toggleFavourite = () => {
    return { type: CART_ACTIONS.UPDATE_FAVOURITE };
};

export const updateSizeSuccess = (size: string) => {
    return {
        type: CART_ACTIONS.UPDATE_SIZE_SUCCESS,
        size
    };
};

export const updateColorSuccess = (size: string) => {
    return {
        type: CART_ACTIONS.UPDATE_COLOR_SUCCESS,
        size
    };
};

export const updateFavouriteSuccess = () => {
    return { type: CART_ACTIONS.UPDATE_FAVOURITE_SUCCESS };
};
