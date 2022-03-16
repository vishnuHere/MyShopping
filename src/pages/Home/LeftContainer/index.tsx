import React from "react";
import { SimpleTab } from "components/SimpleTab";
import { TabData } from "./constants";
import styles from "./index.scss";
import { ProductInfo } from "../constants";

const LeftContainer: React.FC = () => {
    const buildTabData = () => (
        <div
            // className={}
            key={"details"}
        >
            <div className={styles["leftContainer__detail"]}>
                <p>{ProductInfo.details}</p>
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
