import React, { useState, useEffect} from 'react'
import axios from 'axios'
import "./styles.css"
import AddBountyForm from './components/AddBountyForm'
import Bounty from './components/Bounty'


export default function App(){
    const [bounty, setBounty] = useState([])

    function getBounty(){
      axios.get("/bounty")
      .then(res => setBounty(res.data))
      .catch(err => console.log("Err"))

    }

    function addBounty(newBounty){
      axios.post("/bounty", newBounty )
      .then(res =>{
        setBounty(prevBounty => [...prevBounty, res.data])
      })
      .catch(err => console.log("error"))
    }

    function deleteBounty(BountyId) {
      axios.delete(`/bounty/${BountyId}`)
      .then(res =>{
        setBounty(prevBounty => prevBounty.filter(bounty =>bounty._id!==BountyId))
      })
      .catch(err => console.log("Err"))
    }

    function editBounty(updates,  BountyId){
      axios.put(`/bounty/${BountyId}`, updates)
      .then(res => {
        setBounty(prevBounty =>prevBounty.map(bounty => bounty._id !== BountyId ? bounty : res.data))
      })
      .catch(err => console.log("Error"))
    }



    useEffect(() => {
       getBounty()
    }, [])
    return(
        <div className='movie-container'>
          <AddBountyForm
          submit={addBounty}
          btnText="Add Bounty"
          
          />
          
          {
          bounty.map(bounty => 
          <Bounty 
          {...bounty} 
          key ={bounty._id}
          deleteBounty={deleteBounty}
          editBounty={editBounty}
          />) }
          
        </div>
    )
}
