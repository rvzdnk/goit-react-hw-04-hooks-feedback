import React, { Component } from 'react';
import { useState } from 'react';

import styles from './App.module.css';

import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";




export const App = () =>{
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedback = Math.round((good / countTotalFeedback()) * 100);

  const statsValues = [
    ['Good', good],
    ['Neutral', neutral],
    ['Bad', bad],
    ['Total: ', good + neutral + bad],
    ['Positive feedback', `${countPositiveFeedback} %`],
  ];

  const goodIncrement = () => {
    setGood(good + 1);
  };

  const neutralIncrement = () => {
    setNeutral(neutral + 1);
  };

  const badIncrement = () => {
    setBad(bad + 1);
  };

  const {container} = styles;

    return(
        <div className={container}>
        <Section title ="Please leave feedback">
            <FeedbackOptions
              goodIncrement={goodIncrement}
              neutralIncrement={neutralIncrement}
              badIncrement={badIncrement}
            />
        </Section>
        {countTotalFeedback() !== 0
          ? (<Statistics statsValues={statsValues} />)
          : (<Notification message="There is no feedback" />)
        }
      </div>
    )
};

