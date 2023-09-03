import React from "react";

import styles from "./FigureBlock.module.scss";
import { classnames } from "../../utils";

const FigureBlock = ({ children, className, onClick, style }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div
      className={classnames([styles.block, className])}
      onClick={handleClick}
      style={style}
    >
      {children}
    </div>
  );
};

export default FigureBlock;
