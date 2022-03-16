import React, { useMemo } from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import SMMlogo from "../../../assets/logo.svg";
import { HEADER_LINKS } from "./constants";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./index.scss";

type PropType = {};

const NavBar: React.FC<PropType> = () => {
    const buildHeaders = () =>
        HEADER_LINKS.map((header, index) => (
            <div className={styles["navbar__nav-links"]}>{header}</div>
        ));
    const headersSet = useMemo(buildHeaders, HEADER_LINKS);

    return (
        <nav className={styles.navbar}>
            <div className={styles["navbar__logo"]}>
                <img src={SMMlogo} />
                <label>MY_COMPANY.COM</label>
            </div>
            <div className={styles["navbar__nav-menu"]}>{headersSet}</div>
            <div className={styles["navbar__icons-container"]}>
                <BiSearch />
                <AiOutlineShoppingCart />
                <BiUser />
            </div>
        </nav>
    );
};

export default NavBar;
