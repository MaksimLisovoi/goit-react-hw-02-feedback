import './App.css';

import React, { Component } from 'react';
import Statistics from './components/Statistics/';
import FeedbackOptions from './components/FeedbackOptions/';
import Section from './components/Section/';
import Notification from './components/Notification/';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    console.log(e.target.name);
    // console.log(e.target.textContent);
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return Math.round((this.state.good * 100) / total);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const TotalFeedback = this.countTotalFeedback();
    const countPositivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {TotalFeedback == 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={TotalFeedback}
              positivePercentage={countPositivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
