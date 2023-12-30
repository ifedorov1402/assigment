import React, {useState} from "react"

export default function AddMovieForm(props){
    const initInput = {title: props.title || "", genre: props.genre || ""}
    const [inputs, setInputs] = useState(initInput)

    function handeleChange(e){
        const {name, value}= e.target
        setInputs(prevInputs =>({ ...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInput)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={inputs.title } 
                onChange={handeleChange} 
                placeholder="Title"/>
            <input 
                type="text" 
                name="genre" 
                value={inputs.genre} 
                onChange={handeleChange}
                placeholder="Genre"/>
                <button>{props.btnText}</button>
        </form>
    )
}