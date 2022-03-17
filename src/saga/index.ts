import { all, takeEvery } from "redux-saga/effects";
import { CART_ACTIONS } from "store/cart/constants";
import {
    updateColorSaga,
    updateFavouriteSaga,
    updateSizeSaga
} from "./cartSaga";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function* rootSaga() {
    yield all([
        yield takeEvery(CART_ACTIONS.UPDATE_SIZE, updateSizeSaga),
        yield takeEvery(CART_ACTIONS.UPDATE_COLOR, updateColorSaga),
        yield takeEvery(CART_ACTIONS.UPDATE_FAVOURITE, updateFavouriteSaga)
    ]);
}
