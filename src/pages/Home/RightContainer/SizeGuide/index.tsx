import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { updateSize } from "store/cart/actions";
import { SIZES } from "./constants";
import styles from "./index.scss";

const SizeGuide: React.FC = (props) => {
    const dispatch = useDispatch();
    const { size } = props;

    const buildSizeOptions = () =>
        SIZES.map((el) => (
            <div
                key={el.id}
                className={
                    size === el.value &&
                    styles["sizeGuide__size_options--active"]
                }
                onClick={() => dispatch(updateSize(el.value))}
            >
                {el.value}
            </div>
        ));

    return (
        <div className={styles.sizeGuide}>
            <div className={styles.sizeGuide__header}>
                <div className={styles.sizeGuide__desc}>
                    <h4>SIZE</h4>
                    <label>{size}</label>
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
