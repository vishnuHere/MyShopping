import React from "react";
import { ImageMap } from "./constants";
import styles from "./index.scss";

const MiddleContainer: React.FC = () => {
    return (
        <div className={styles.middleContainer}>
            <div className={styles.middleContainer__image_container}>
                {ImageMap["black"].map((image) => (
                    <img src={image} alt="black image" loading="lazy" />
                ))}
            </div>
        </div>
    );
};

export default MiddleContainer;
