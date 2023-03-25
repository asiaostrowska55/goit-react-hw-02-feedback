import PropTypes from 'prop-types';
import { Component } from 'react';

class StatisticsComponent extends Component {
  render() {
    return (
      <>
        <h1>Statistics</h1>
        <ul
          style={{
            listStyle: 'none',
          }}
        >
          <li>Good:</li>
          <li>Neutral:</li>
          <li>Bad:</li>
        </ul>
      </>
    );
  }
}

export const Statistics = () => {
  return (
    <div>
      <StatisticsComponent />
    </div>
  );
};
