import React from 'react';

const DisplayPhotos = (props) => {
  console.log(props.photoArray)
  return (
    <section className="photoList">
      {props.photoArray.map((goal,i) => {
        return (
          <div className="images">
            <img src={goal + i} alt=""/>
          </div>
        )
      })}
    </section>
    )

};

export default DisplayPhotos;



