import React from "react";
import LeftContainer from "./LeftContainer";
import styles from "./index.scss";

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <LeftContainer />
        </div>
    );
};

export default Home;
