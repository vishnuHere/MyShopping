import React from "react";
import styles from "./index.scss";
import wordings from "./wordings";

const Footer: React.FC<PropType> = ({ toggleFooterView }) => {
    return (
        <div className={styles.footer}>
            <label>{wordings.noteFromTheEditor}</label>
            <label>{wordings.content}</label>
            <label>---{wordings.by}</label>
        </div>
    );
};

export default Footer;
