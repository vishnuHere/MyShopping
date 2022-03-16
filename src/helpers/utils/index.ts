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
