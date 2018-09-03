import React from 'react';

const DisplayPhotos = (props) => {
  console.log(props.photoArray)
  return (
    <section className="photoList">
      {props.photoArray.map((goal) => {
        return (
          <div className="images">
            <img src={goal} alt=""/>
          </div>
        )
      })}
    </section>
    )

};

export default DisplayPhotos;



