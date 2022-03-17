import React, { useEffect } from "react";
import LeftContainer from "./LeftContainer";
import styles from "./index.scss";
import RightContainer from "./RightContainer";
import MiddleContainer from "./MiddleContainer";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite, updateColor, updateSize } from "store/cart/actions";

const Home: React.FC = () => {
    const { size, color, favourite } = useSelector(
        (state: RootState) => state.cartReducer
    );
    const cartInfo = JSON.parse(localStorage.getItem("cartInfo"));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateSize(cartInfo?.size || size));
        dispatch(updateColor(cartInfo?.color || color));
        dispatch(toggleFavourite(cartInfo?.favourite || favourite));
    }, []);

    return (
        <div className={styles.home}>
            <LeftContainer />
            <MiddleContainer color={color} favourite={favourite} />
            <RightContainer color={color} size={size} />
        </div>
    );
};

export default Home;
