import React, { Children } from "react";
import '../style.scss';

const Base = ({ children, className, handleClose }) => {
  return (
    <div className={className}>
        <div className="Inspect-Content">
            {children}
        </div>
    </div>
  );
};

export default Base;