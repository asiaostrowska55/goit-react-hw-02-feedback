import css from 'components/Feedback.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

// class MyComponent extends Component {
//   name = 'Asia';
//   age = 23;

//   render() {
//     return (
//       <div>
//         My name is {this.name}. I am {this.age} years old
//       </div>
//     );
//   }
// }

class FeedbackComponent extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.props;

    return (
      <>
        <h1>Please leave feedback</h1>
        <div className={css.btnDisplay}>
          <button type="button" className={css.btn}>
            Good {good}
          </button>
          <button type="button" className={css.btn}>
            Neutral {neutral}
          </button>
          <button type="button" className={css.btn}>
            Bad {bad}
          </button>
        </div>
      </>
    );
  }
}

export const Feedback = () => {
  return (
    <div>
      <FeedbackComponent />
    </div>
  );
};

Feedback.propTypes = {
  state: PropTypes.shape(
    {
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number,
    }.isRequired
  ),
};
