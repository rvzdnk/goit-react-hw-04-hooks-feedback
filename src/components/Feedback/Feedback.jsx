import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import React from "react";

import Statistics from "components/Statistics/Statistics";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";

class Feedback extends React.Component{
    state = {
            good: 0,
            neutral: 0,
            bad: 0
          };

    incraseStateField = stateField => {
        this.setState({...this.state, [stateField]: this.state[stateField]+1});
    };

    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedback = () => {
        return  this.countTotalFeedback() > 0 ? ((this.state.good/this.countTotalFeedback())*100).toFixed(2) : 0;
    };

    rednerStatisticsSection =() => {
        if (this.countTotalFeedback() === 0){
            return <Notification message="There is no feedback"/>;
        }
        return (
        <Section title ="Statistics">
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedback}/>
        </Section>
        )
    };

    render() {
        const {good, neutral, bad} = this.state;
        const options = Object.keys(this.state);

        return(
            <div>
            <Section title ="Please leave feedback">
                <FeedbackOptions
                    options={options}
                    onLeaveFeedback={this.incraseStateField}/>
            </Section>
            {this.rednerStatisticsSection()}
            </div>
        )
    }
};

export default Feedback;