import React from 'react';

const DisplayPhotos = (props) => {
  console.log(props.photoArray)
  return (
    <section className="photoList">
      {props.photoArray.map((goal,i) => {
        return (
          <div className={`images`+ i}>
            <img className={`image` + i} key={goal+i} src={goal + i} alt=""/>
          </div>
        )
      })}
    </section>
    )
};

export default DisplayPhotos;



