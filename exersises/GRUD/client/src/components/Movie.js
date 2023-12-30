import React, {useState} from "react";
import AddMovieForm from "./AddMovieForm";

export default function Movie(props){
    const {title, genre, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="movie">
            { !editToggle ?
            <>
            <h1>Title: {title}</h1>
                <h1>Genre: {genre}</h1>
                <button onClick={() =>props.deleteMovie(_id)}className="delete-btn">
                    Delete
                </button>
                <button
                className="edit-btn"
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Edit
                    </button>
            </> 
            
            :
            <>
                <AddMovieForm
                    title ={title}
                    genre = {genre}
                    _id={_id}
                    btnText= "Submit Edit" 
                    submit = {props.editMovie}
                    onSubmitSuccess={() => setEditToggle(false)}
                />
                <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Close
                </button>
            </>
            
            }
        </div>
    )
} 