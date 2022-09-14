import React from "react";
import styles from './Section.module.css';

export const Section = ({title, children}) => {

    const { header } = styles;

    return(
        <div>
            <h3 className={header}>{title}</h3>
            {children}
        </div>
    )
};

export default Section;