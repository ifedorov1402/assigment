import React from "react"
import Mem from "./Mem"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    const [listMemes, setListMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    // function getMemeImage() {
    //     const randomNumber = Math.floor(Math.random() * allMemes.length)
    //     const url = allMemes[randomNumber].url
    //     setMeme(prevMeme => ({
    //         ...prevMeme,
    //         randomImage: url
    //     }))
        
    // }
    function getMemeImage() {
        if (allMemes.length > 0) {
          const randomNumber = Math.floor(Math.random() * allMemes.length);
          const url = allMemes[randomNumber].url;
          
          setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
          }));
        } else {
          console.error("No memes available.");
        }
      }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
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
    function handleDelete(index) {
        setListMemes((prevMemes) => prevMemes.filter((_, i) => i !== index));
      }
      


    
    
    return (
        <main>
            <div className="form" >
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
                <button 
                        className="form--button"
                        onClick={handleSubmit}
                    >  
                        save MEME 🖼
                </button>
            </div>
            <div className="meme">
            <div className="meme--image-container">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
                {listMemes.map((mem, index) => (
                  <Mem key={index} data={mem} onDelete = {()=> handleDelete(index) } setListMemes={setListMemes}  index={index}  allMemes={allMemes} />
                    ))}
    
            </div>
            
        </main>
    )
}