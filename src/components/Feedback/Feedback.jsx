import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistic } from './Statistics/StatisticsFeedback';
import { Notification } from './Notification/Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedbacks() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }
  onLeaveFeedback(e) {
    this.setState(prevState => ({ [e]: prevState[e] + 1 }));
  }
  countPositivePercentage() {
    const totalFeedbacks = this.countTotalFeedbacks();
    const goodEl = this.state.good;
    return Math.round((goodEl * 100) / totalFeedbacks);
  }
  render() {
    const { good, bad, neutral } = this.state;
    const totalFeedbacks = this.countTotalFeedbacks();
    const positivePercentage = this.countPositivePercentage();
    return (
      <>
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={this.onLeaveFeedback.bind(this)}
        ></FeedbackOptions>
        {totalFeedbacks ? (
          <Statistic
            good={good}
            bad={bad}
            neutral={neutral}
            total={totalFeedbacks}
            positivePercentage={positivePercentage}
          ></Statistic>
        ) : (
          <Notification message={'There is on feedbacks'}></Notification>
        )}
      </>
    );
  }
}
