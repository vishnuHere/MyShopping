import React, { useCallback, useEffect, useState } from "react";
import DetailsContainer from "./DetailsContainer";
import styles from "./index.scss";
import PropertiesContainer from "./PropertiesContainer";
import ImageContainer from "./ImageContainer";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite, updateColor, updateSize } from "store/cart/actions";
import { joinClass } from "helpers/utils";

const Home: React.FC = () => {
    const [isImageEnd, setIsImageEnd] = useState(false);
    const { size, color, favourite } = useSelector(
        (state: RootState) => state.cartReducer
    );
    const cartInfo = JSON.parse(localStorage.getItem("cartInfo"));
    const dispatch = useDispatch();
    const handleIsImageEndToggle = useCallback((flag: boolean) => {
        setIsImageEnd(flag);
    }, []);

    useEffect(() => {
        dispatch(updateSize(cartInfo?.size || size));
        dispatch(updateColor(cartInfo?.color || color));
        dispatch(toggleFavourite(cartInfo?.favourite || favourite));
    }, []);

    return (
        <div
            className={joinClass(
                styles.home,
                isImageEnd && styles["home__not-sticky"]
            )}
        >
            <DetailsContainer />
            <ImageContainer
                color={color}
                favourite={favourite}
                toggleIsImageEndFlag={handleIsImageEndToggle}
            />
            <PropertiesContainer color={color} size={size} />
        </div>
    );
};

export default Home;
