import React from "react";
import LeftContainer from "./LeftContainer";
import styles from "./index.scss";
import RightContainer from "./RightContainer";
import MiddleContainer from "./MiddleContainer";

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <LeftContainer />
            <MiddleContainer />
            <RightContainer />
        </div>
    );
};

export default Home;
