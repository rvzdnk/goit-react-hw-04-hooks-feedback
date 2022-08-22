import React from "react";
import styles from './Section.module.css';

class Section extends React.Component{
    render() {
        const {title, children} = this.props;
        const {header} = styles;
        return(
            <div>
                <h3 className={header}>{title}</h3>
                {children}
            </div>
        )
    }
};

export default Section;