import React from "react";
import { SimpleTab } from "components/SimpleTab";
import { TabData } from "./constants";
import styles from "./index.scss";

const LeftContainer: React.FC = () => {
    const buildTabData = () => (
        <div
            // className={}
            key={TabData[0].label}
        >
            <div className={styles["leftContainer__detail"]}>
                <p>{TabData[0].detail}</p>
            </div>
        </div>
    );
    return (
        <div className={styles.leftContainer}>
            <SimpleTab tabs={TabData} selected={"details"} />
            {buildTabData()}
            <label>See the EDITOR'S NOTE</label>
            <label>Learn about the DESIGNER</label>
        </div>
    );
};

export default LeftContainer;
