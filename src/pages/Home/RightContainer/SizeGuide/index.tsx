import React, { memo } from "react";
import { SIZES } from "./constants";
import styles from "./index.scss";

const SizeGuide: React.FC = (props) => {
    const buildSizeOptions = () =>
        SIZES.map((el) => (
            <div key={el.id} disabled={el.disabled}>
                {el.value}
            </div>
        ));

    return (
        <div className={styles.sizeGuide}>
            <div className={styles.sizeGuide__header}>
                <div className={styles.sizeGuide__desc}>
                    <h4>SIZE</h4>
                    <label>{props.size}</label>
                </div>
                <label>SIZE GUIDE</label>
            </div>
            <div className={styles.sizeGuide__size_options}>
                {buildSizeOptions()}
            </div>
        </div>
    );
};

export default memo(SizeGuide);
