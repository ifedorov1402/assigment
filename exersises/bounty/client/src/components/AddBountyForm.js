import React, {useState} from "react"

export default function AddBountyForm(props){
    
    const initInput = {
     first_name: props.first_name || "",
     last_N: props.last_N || "",
     living: props.living || false,
     Bounty_Ammount: props.Bounty_Ammount || 0,
     type: props.type || ""
    }
    const [inputs, setInputs] = useState(initInput)

    function handeleChange(e){
        const {name, value, type, checked}= e.target
        setInputs(prevInputs =>({ ...prevInputs, 
            [name]: type === "checkbox" ? checked : value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInput)
        props.toggle()
    }

    return (
        <form onSubmit={handleSubmit}>
             <input
                type="text"
                name="first_name"
                value={inputs.first_name}
                onChange={handeleChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="last_N"
                value={inputs.last_N}
                onChange={handeleChange}
                placeholder="Last Name"
            />
            <label>
                Living:
                <input
                    type="checkbox"
                    name="living"
                    checked={inputs.living}
                    onChange={handeleChange}
                />
            </label>
            <input
                type="number"
                name="Bounty_Ammount"
                value={inputs.Bounty_Ammount}
                onChange={handeleChange}
                placeholder="Bounty Amount"
            />
            <input
                type="text"
                name="type"
                value={inputs.type}
                onChange={handeleChange}
                placeholder="Type (e.g., Jedi)"
            />
                <button>{props.btnText}</button>
        </form>
    )
}
AddBountyForm.defaultProps = {
    toggle: () => {}
};