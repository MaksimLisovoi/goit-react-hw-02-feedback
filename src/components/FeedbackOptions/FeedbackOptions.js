import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);

  const buttons = Object.keys(options);
  return (
    <div className={s.container}>
      {buttons.map(btn => (
        <button
          className={s.btn}
          key={btn}
          name={btn}
          type="button"
          onClick={onLeaveFeedback}
        >
          {btn.charAt(0).toUpperCase() + btn.slice(1)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
