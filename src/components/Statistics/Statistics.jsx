import React from "react";
import styles from './Statistics.module.css';

export const Statistics = ({ statsValues }) =>{
    const {stats__list} = styles
    return(
        <ul className={stats__list}>
            {statsValues.map(([name, value]) => (
                <li key={name}>
                    {name}: {value}
                </li>
            ))}
        </ul>
    )
};

export default Statistics;