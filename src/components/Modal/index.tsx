import React from "react";
import styles from "./index.scss";
import { Button } from "components/Button";
import { joinClass } from "helpers/utils";
import { Maybe } from "types";

type PropType = {
    title?: string;
    children: JSX.Element;
    save?: string;
    cancel?: string;
    onSave?: Maybe<() => void>;
    onCancel?: () => void;
    isOpen: boolean;
    className: any;
};

export const Modal: React.FC<PropType> = ({
    title,
    children,
    save,
    cancel,
    onSave,
    isOpen,
    onCancel,
    className
}) => {
    return (
        <>
            {isOpen && <div className={styles.backdrop} onClick={onCancel} />}
            {isOpen && (
                <div className={joinClass(styles.modal, className)}>
                    {title && <div className={styles.modal__head}>{title}</div>}
                    <div className={styles.modal__content}>{children}</div>
                    {save && (
                        <div className={styles.modal__button}>
                            <Button
                                className={styles["modal__button--child"]}
                                type="button"
                                label={save}
                                onClick={() => {
                                    onSave();
                                    onCancel();
                                }}
                            />
                            <Button
                                className={styles["modal__button--child"]}
                                type="button"
                                label={cancel}
                                onClick={onCancel}
                            />
                        </div>
                    )}
                </div>
            )}
        </>
    );
};
