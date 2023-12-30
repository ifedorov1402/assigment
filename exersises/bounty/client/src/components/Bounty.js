import React, {useState} from "react";
import AddBountyForm from "./AddBountyForm";

export default function Bounty(props){
    const {first_name, last_N,living,Bounty_Ammount,type, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="movie">
            { !editToggle ?
            <>
           <h1>Name: {first_name} {last_N}</h1>
            <p>Living: {living ? "Yes" : "No"}</p>
            <p>Bounty Amount: {Bounty_Ammount}</p>
            <p>Type: {type}</p>
                <button onClick={() =>props.deleteBounty(_id)}className="delete-btn">
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
                <AddBountyForm
                    first_name ={first_name}
                    last_N = {last_N}
                    living ={living}
                    Bounty_Ammount={Bounty_Ammount}
                    type= {type}
                    _id={_id}
                    btnText= "Submit Edit" 
                    submit={props.editBounty}
                    toggle={() => setEditToggle(prevToggle => !prevToggle)}
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