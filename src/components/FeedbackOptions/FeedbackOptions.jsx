import React from "react";

import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({
  goodIncrement,
  neutralIncrement,
  badIncrement,
    }) =>{

    const {buttons__container, buttons__item} = styles;

    return (
        <div className={buttons__container}>
            <button className={buttons__item} onClick={goodIncrement}>
                Good
            </button>
            <button className={buttons__item} onClick={neutralIncrement}>
                Neutral
            </button>
            <button className={buttons__item} onClick={badIncrement}>
                Bad
            </button>
        </div>
    )
};

export default FeedbackOptions;