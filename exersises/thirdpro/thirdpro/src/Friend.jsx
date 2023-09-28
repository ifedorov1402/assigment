import React from 'react';
import Pet from './Pets';


export default function Friend(props){
    const pets = props.pets.map((item, index) => (
        <Pet
        key={item.id} 
        {...item}
        />
      ));
   
   
    return(
        <div className="friend">
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <h3>Pets:</h3>
        <div className="pets">
          {pets}
        </div>
      </div>
    );
}