import { useEffect } from "react";
import { Maybe } from "types";

const prefix = "qb-wp-";

export const joinClass = (...classNames: Maybe<boolean | string>[]): string => {
    return classNames
        .filter((className: string) => !!className)
        .map((className: string) =>
            className.startsWith(prefix) ? className : `${prefix}${className}`
        )
        .join(" ");
};

export function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export const getItemFromLocalStorage = (id: string) => {
    return JSON.parse(localStorage.getItem(id));
};

export const useIntersectionObserver = ({
    target,
    onIntersect,
    threshold = 0.1,
    rootMargin = "0px"
}) => {
    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, {
            rootMargin,
            threshold
        });
        const current = target.current;
        observer.observe(current);
        return () => {
            observer.unobserve(current);
        };
    });
};
