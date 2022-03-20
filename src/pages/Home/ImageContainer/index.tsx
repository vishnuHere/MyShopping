import React, { useRef } from "react";
import Carousel from "components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ImageMap } from "./constants";
import styles from "./index.scss";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleFavourite } from "store/cart/actions";
import ImageRenderer from "./ImageRenderer";
import { useIntersectionObserver } from "helpers/utils";

export type PropType = {
    color: string;
    favourite: boolean;
    toggleIsImageEndFlag: () => {};
};

const ImageContainer: React.FC = (props: PropType) => {
    const endImageRef = useRef();
    const dispatch = useDispatch();
    const { toggleIsImageEndFlag, color, favourite } = props;

    useIntersectionObserver({
        target: endImageRef,
        onIntersect: ([{ isIntersecting }], observerElement) => {
            toggleIsImageEndFlag(isIntersecting);
        }
    });

    return (
        <div className={styles.middleContainer}>
            <AiFillHeart
                size={40}
                color={favourite ? "red" : "white"}
                onClick={() => dispatch(toggleFavourite(!favourite))}
            />
            <div className={styles.middleContainer__image_container}>
                {ImageMap[color].map((image, index) => (
                    <ImageRenderer index={index} color={color} url={image} />
                ))}
                <div ref={endImageRef} />
            </div>
            <div className={styles.middleContainer__carousel_container}>
                <Carousel images={ImageMap[color]} />
            </div>
        </div>
    );
};

export default ImageContainer;
