import React from "react";
import LeftContainer from "./LeftContainer";
import styles from "./index.scss";
import RightContainer from "./RightContainer";
import MiddleContainer from "./MiddleContainer";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
    const { size, color, favourite } = useSelector(
        (state: RootState) => state.cartReducer
    );

    return (
        <div className={styles.home}>
            <LeftContainer />
            <MiddleContainer color={color} />
            <RightContainer color={color} size={size} favourite={favourite} />
        </div>
    );
};

export default Home;
