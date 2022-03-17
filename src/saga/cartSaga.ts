import { put } from "redux-saga/effects";

import {
    updateColorSuccess,
    updateFavouriteSuccess,
    updateSizeSuccess
} from "store/cart/actions";

export function* updateSizeSaga(action: { type: string; size: string }) {
    try {
        yield put(updateSizeSuccess(size));
    } catch (error) {}
}

export function* updateColorSaga(action: { type: string; color: string }) {
    try {
        yield put(updateColorSuccess(color));
    } catch (error) {}
}

export function* updateFavouriteSaga(action: { type: string }) {
    try {
        yield put(updateFavouriteSuccess());
    } catch (error) {}
}
