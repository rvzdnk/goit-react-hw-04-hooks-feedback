import React, { Component } from 'react';

import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";
import styles from './App.module.css';


export class App extends Component{

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

  renderStatisticsSection =() => {
    const {good, neutral, bad} = this.state;

    if (this.countTotalFeedback() === 0){
        return <Notification message="There is no feedback"/>;
    }
    return (
    <Section title ="Statistics">
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedback()}/>
    </Section>
    )
  };

  render() {
    const options = Object.keys(this.state);
    const {container} = styles;

    return(
        <div className={container}>
        <Section title ="Please leave feedback">
            <FeedbackOptions
                options={options}
                onLeaveFeedback={this.incraseStateField}/>
        </Section>
        {this.renderStatisticsSection()}
        </div>
    )
  }
};

