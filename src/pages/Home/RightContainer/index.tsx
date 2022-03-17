import React from "react";
import styles from "./index.scss";
import { ProductInfo } from "../constants";
import wordings from "./wordings";
import { Button } from "components";
import { AiOutlineArrowRight } from "react-icons/ai";
import SizeGuide from "./SizeGuide";
import { useDispatch } from "react-redux";
import { updateColor } from "store/cart/actions";

export type PropType = {
    color: string;
    size: string;
};

const RightContainer: React.FC = (props: PropType) => {
    const { name, description, price } = ProductInfo;
    const { color, size } = props;
    const dispatch = useDispatch();

    const handleImageSelection = (index: number) => {
        dispatch(updateColor(index ? "BLACK" : "GREEN"));
    };

    const colorIndex = { GREEN: 0, BLACK: 1 };

    return (
        <div className={styles.rightContainer}>
            <h1>{name}</h1>
            <p>{description}</p>
            <h4>{price}</h4>
            <div className={styles["rightContainer__desc"]}>
                {ProductInfo.thumbnails.map((logo, index) => (
                    <div
                        key={index}
                        className={
                            colorIndex[color] === index &&
                            styles["rightContainer__selected_color"]
                        }
                        onClick={() => handleImageSelection(index)}
                    >
                        <img src={logo} loading={"lazy"} />
                    </div>
                ))}
            </div>
            <div className={styles["rightContainer__desc"]}>
                <h4>COLOR</h4>
                <label>{color}</label>
            </div>
            <SizeGuide size={size} />
            <Button label="ADD TO BAG" icon={<AiOutlineArrowRight />} />
            <label>{wordings.note1}</label>
            <label>{wordings.note2}</label>
        </div>
    );
};

export default RightContainer;
