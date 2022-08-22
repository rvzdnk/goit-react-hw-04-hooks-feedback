import React from "react";
import styles from './Statistics.module.css';

class Statistics extends React.Component{
    render() {
        const {good, neutral, bad, total, positivePercentage} = this.props;
        const {stats__list} = styles
        return(
            <div>
                <div className={stats__list}>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {total}</p>
                    <p>Positive feedback: {positivePercentage}%</p>
                </div>
            </div>
        )
    }
};

export default Statistics;