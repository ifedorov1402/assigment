import React from "react";


export default function BlogPos(props){
   
   
    return(
        <div className="mainpost">
            <div className="second" id="second">
            <h1 className="mainHead">{props.title}</h1>
            <h3 className="mainText">{props.subTitle}</h3>
            <p className="mainAuthor"> <span>Posted by </span>{props.author} <span>on </span> {props.date}</p>
            </div> 

        </div>

    )
}