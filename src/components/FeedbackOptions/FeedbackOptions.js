import React from 'react';
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

export default FeedbackOptions;
