import React from 'react';

export const ListComponent = ({people}) => {
  return (
    <div>
      {
        people.map( ({name, id, image, age}) => (
          <article className='person' key={id}>
          <img src={image} alt="" />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
          </article>
        ) )
      }
    </div>
  )
}
