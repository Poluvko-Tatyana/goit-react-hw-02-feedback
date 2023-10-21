import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countFeedback = event => {
    console.log(event.target);
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        neutral: prevState.neutral + 1,
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Feedback countFeedback={this.countFeedback} />
        <h2>Statistics</h2>
        <li>
          <ul>Good: {this.state.good}</ul>
          <ul>Neutral: {this.state.neutral}</ul>
          <ul>Bad: {this.state.bad}</ul>
        </li>
      </div>
    );
  }
}
