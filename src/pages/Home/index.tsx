import React from "react";
import LeftContainer from "./LeftContainer";
import styles from "./index.scss";
import RightContainer from "./RightContainer";

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <LeftContainer />
            <RightContainer />
        </div>
    );
};

export default Home;
