import React from "react";

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

    render() {
        return(
            <div>
                <h4>Please leave feedback</h4>
                <div>
                    <button onClick={()=>{
                        this.incraseStateField('good');}}>
                            Good
                    </button>
                    <button onClick={()=>{
                        this.incraseStateField('neutral');}}>
                            Neutral
                    </button>
                    <button onClick={()=>{
                        this.incraseStateField('bad');}}>
                            Bad
                    </button>
                </div>
                <h5>Statistics</h5>
                <div>
                    <p>Good: {this.state.good}</p>
                    <p>Neutral: {this.state.neutral}</p>
                    <p>Bad: {this.state.bad}</p>
                    <p>Total: {this.countTotalFeedback()}</p>
                    <p>Positive feedback: {this.countPositiveFeedback()}%</p>
                </div>
            </div>
        )
    }
};

export default Feedback;