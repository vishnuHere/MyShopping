import React from "react";
import { joinClass } from "helpers/utils";
import styles from "./index.scss";

type propTypes = {
    tabs: {
        label: string;
        value: string;
        disabled?: boolean;
    }[];
    selected: string;
    className?: string;
    onChange: (value: string) => void;
};

export const SimpleTab = ({
    tabs,
    selected,
    className,
    onChange
}: propTypes) => (
    <div className={styles.newTab}>
        {tabs.map((tab) => (
            <div
                key={tab.value}
                className={joinClass(
                    styles["newTab__tabSection"],
                    selected === tab.value && styles["newTab__active"],
                    tab.disabled && styles["newTab__disabled"]
                )}
                onClick={!tab.disabled ? () => onChange(tab.value) : null}
            >
                {tab.label}
            </div>
        ))}
    </div>
);
