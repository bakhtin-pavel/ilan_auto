import React from "react";
import FigureBlock from "../FigureBlock/FigureBlock";
import { ShevroneIcon } from "../../assets/icons";
import { classnames } from "../../utils";

import styles from "./Button.module.scss";

const Button = ({ disabled, onClick }) => {
    const handleClick = () => onClick();
    return (
        <FigureBlock
            className={classnames([styles.button, [styles.disabled, disabled]])}
            onClick={handleClick}
        >
            <div className={styles.shevroneWrap}>
                <ShevroneIcon />
                <ShevroneIcon className={styles.secondShevrone} />
            </div>
        </FigureBlock>
    );
};

export default Button;
