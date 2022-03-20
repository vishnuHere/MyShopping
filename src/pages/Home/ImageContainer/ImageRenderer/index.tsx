import React, { useState, useRef, memo } from "react";
import styles from "./index.scss";
import { useIntersectionObserver } from "helpers/utils";

export type PropType = {
    url: string;
    index: number;
    color: string;
};

const ImageRenderer = (props: PropType) => {
    const { url, index, color } = props;
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useIntersectionObserver({
        target: ref,
        onIntersect: ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
                setIsVisible(true);
                observerElement.unobserve(ref.current);
            }
        }
    });

    return (
        <div
            id={color + index}
            className={styles["image-container"]}
            ref={ref}
            key={color + index}
        >
            {isVisible && <img className={styles.image} src={url} />}
        </div>
    );
};

export default memo(ImageRenderer);
