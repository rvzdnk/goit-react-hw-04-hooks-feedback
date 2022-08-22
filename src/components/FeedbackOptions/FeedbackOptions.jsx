import React from "react";
import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends React.Component{
    render() {
        const {options, onLeaveFeedback} = this.props;
        const {buttons__container, buttons__item} = styles;
        return(
            <div>
                <div className={buttons__container}>
                    <button className={buttons__item} onClick={()=>{
                        onLeaveFeedback(options[0]);}}>
                            Good
                    </button>
                    <button className={buttons__item} onClick={()=>{
                        onLeaveFeedback(options[1]);}}>
                            Neutral
                    </button>
                    <button className={buttons__item} onClick={()=>{
                        onLeaveFeedback(options[2]);}}>
                            Bad
                    </button>
                </div>
            </div>
        )
    }
};

export default FeedbackOptions;