import React from 'react';

const DisplayGoals = (props) => {
  const goalArray = Object.entries(props.listOfGoals);
  return (
    <section className="goalList">
    {goalArray.map((goal) => {
      return (
        <h3 key={goal[0]}>{goal[1]}</h3>
      )
    })}
    </section>
  )
};


export default DisplayGoals;

