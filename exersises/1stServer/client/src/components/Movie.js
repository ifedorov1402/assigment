import React from "react";

export default function Movie(props){
    const {title, genre, _id} = props
    return(
        <div className="movie">
            <h1>Title: {title}</h1>
            <h1>Genre: {genre}</h1>

        </div>
    )
}