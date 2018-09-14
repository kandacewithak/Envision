import React from 'react';

const DisplayGoals = (props) => {
  const goalArray = Object.entries(props.listOfGoals);
  return (
    <section className="goals">
    {goalArray.map((goal, i) => {
      return (
        <h3 className={`goal` + i} key={goal+ i}>{goal[1]}</h3>
      )
    })}
    </section>
  )
};

export default DisplayGoals;

