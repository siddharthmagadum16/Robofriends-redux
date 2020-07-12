import React, {Fragment} from 'react';
import Card from  './Card';

const CardList = ({ Robots })=> {
  return (
    <Fragment>
    {
      Robots.map((user,i) =>{
        return (
            <Card
              key={i}
              id={ Robots[i].id } 
              name={ Robots[i].name } 
              username={Robots[i].username} 
              email={Robots[i].email} 
            />
        )
      })
    }
    </Fragment>
  )
}

export default CardList;
