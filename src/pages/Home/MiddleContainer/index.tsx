import React from "react";
import Carousel from "components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ImageMap } from "./constants";
import styles from "./index.scss";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleFavourite } from "store/cart/actions";

export type PropType = {
    color: string;
    favourite: boolean;
};

const MiddleContainer: React.FC = (props: PropType) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.middleContainer}>
            <AiFillHeart
                size={40}
                color={props.favourite ? "red" : "white"}
                onClick={() => dispatch(toggleFavourite(!props.favourite))}
            />
            <div className={styles.middleContainer__image_container}>
                {ImageMap[props.color].map((image) => (
                    <img src={image} alt="display image" loading="lazy" />
                ))}
            </div>
            <div className={styles.middleContainer__carousel_container}>
                <Carousel images={ImageMap[props.color]} />
            </div>
        </div>
    );
};

export default MiddleContainer;
