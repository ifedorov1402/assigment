import React from 'react';
export default function Pets(props){
    return(
        <div className="pets">
            <p>Name: {props.name}</p>
            <p>Breed: {props.breed}</p>
        </div>

    )
}