import React from "react";
import styles from "./index.scss";
import { ProductInfo } from "../constants";
import wordings from "./wordings";
import { Button } from "components";
import { AiOutlineArrowRight } from "react-icons/ai";
import SizeGuide from "./SizeGuide";

const RightContainer: React.FC = () => {
    const { name, description, price } = ProductInfo;
    return (
        <div className={styles.rightContainer}>
            <h1>{name}</h1>
            <p>{description}</p>
            <h4>{price}</h4>
            <div className={styles["rightContainer__desc"]}>
                {ProductInfo.thumbnails.map((logo, index) => (
                    <div key={index}>
                        <img src={logo} loading={"lazy"} />
                    </div>
                ))}
            </div>
            <div className={styles["rightContainer__desc"]}>
                <h4>COLOR</h4>
                <label>BLACK</label>
            </div>
            <SizeGuide size="L" />
            <Button label="ADD TO BAG" icon={<AiOutlineArrowRight />} />
            <label>{wordings.note1}</label>
            <label>{wordings.note2}</label>
        </div>
    );
};

export default RightContainer;
