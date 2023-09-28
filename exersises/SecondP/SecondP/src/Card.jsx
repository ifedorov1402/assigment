import React from "react"
import Data from "./assets/Data"

export default function Card(props) {
    console.log('inside card component', props.img)
    return (
        <div className="card">
            <img 
                src={`./${props.img}`} 
                className="card--image" 
            />
            <div className="card--stats">
                <span>{props.price}</span>
                <span className="gray">({props.timeToGo}) • </span>
    
            </div>
        </div>
    )
}