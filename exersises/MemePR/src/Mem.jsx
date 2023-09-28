import React from 'react';

function Mem({ data, onDelete, setListMemes, allMemes, index }) {
 const [dataMem, setDataMem] = React.useState(data)
 

  function handleChange(event) {
    const {name, value} = event.target
    setDataMem(prevMem => ({
        ...prevMem,
        [name]: value
    }))
}
function handleEdit() {
  const updatedMeme = {
      ...dataMem, // Keep the existing meme data
  };
  
  setListMemes((prevMemes) =>
      prevMemes.map((meme, i) => (i === index ? updatedMeme : meme))
  );
  setIsClicked(false); // Exit edit mode after saving
}
function handleSubmit(event) {
  event.preventDefault()
  const newMeme = { ...meme };
  setListMemes((prev) => [...prev, newMeme])
  setMeme({
      topText: "",
      bottomText: "",
      randomImage: ""
  })
  
  console.log(listMemes)



}
// const createMemeImage = () => {
//   setListState(param1 => [
//       ...param1,
//       {
//           topText: meme.topText,
//           bottomText: meme.bottomText,
//           randomImage: meme.randomImage,
//           id: uuidv4()
//       }
//   ])
// }


function getMemeImage() {
  const randomNumber = Math.floor(Math.random() * allMemes.length)
  const url = allMemes[randomNumber].url
  setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
  }))
  
}

  const [isClicked,setIsClicked] = React.useState(false)
  function clicked(){
      setIsClicked(!isClicked)
      console.log(isClicked)
   

  }
  console.log(data)
  return (
    <>
    <div className="meme--image-container">
    <img src={data.randomImage} className="meme--image" />
    <h2 className="meme--text top">{data.topText}</h2>
    <h2 className="meme--text bottom">{data.bottomText}</h2>
    <button onClick={onDelete}>Delete</button>
    <button onClick={clicked}>Edit</button>

    </div>
    {
        
        isClicked? 
        <div className="form" >
        <input 
            type="text"
            placeholder="Top text"
            className="form--input"
            name="topText"
            value={dataMem.topText}
            onChange={handleChange}
        />
        <input 
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name="bottomText"
            value={dataMem.bottomText}
            onChange={handleChange}
        />
        <button 
                className="form--button"
                onClick={handleEdit}
            >  
                save MEME 🖼
        </button>
    </div>
        : 
        <>
      
      </>
  
  
      }
    </>

    
    

  );
}

export default Mem;