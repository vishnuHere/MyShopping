import React from "react";
import { ImageMap } from "./constants";
import styles from "./index.scss";

export type PropType = {
    color: string;
};

const MiddleContainer: React.FC = (props: PropType) => {
    return (
        <div className={styles.middleContainer}>
            <div className={styles.middleContainer__image_container}>
                {ImageMap[props.color].map((image) => (
                    <img src={image} alt="display image" loading="lazy" />
                ))}
            </div>
        </div>
    );
};

export default MiddleContainer;
