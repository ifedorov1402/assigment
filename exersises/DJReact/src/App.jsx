import React from "react"
import Square from "./Square"
import song from "./assets/song.mp3"

export default function App(props) {
    const [color, setColor] = React.useState(["white", "white", "white", "white"])
    const [isMusicPlaying, setIsMusicPlaying] = React.useState(false);
    const audioRef = React.useRef(null);
    function toggleMusic() {
      if (isMusicPlaying) {
          audioRef.current.pause();
      } else {
          audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
  }

    function clickDj() {
      const newColors = color.map((color) => (color === "white" ? "black" : "white"));
      setColor(newColors);
  }
  function clickPartyDj() {
    const newColors = color.map((currentColor, index) =>
            index < 2 ? "green" : currentColor
        );
        setColor(newColors);
}
function clickProDj1() {
  const newColors = color.map((currentColor, index) =>
          index === 2 ? "blue" : currentColor
      );
      setColor(newColors);
}
function clickProDj2() {
  const newColors = color.map((currentColor, index) =>
          index === 3 ? "blue" : currentColor
      );
      setColor(newColors);
}
function clickBig1() {
  const newColors = color.map((currentColor, index) =>
          index === 0 ? "yellow" : currentColor
      );
      setColor(newColors);
}
function clickBig2() {
  const newColors = color.map((currentColor, index) =>
          index === 1 ? "gray" : currentColor
      );
      setColor(newColors);
}
function clickBig3() {
  const newColors = color.map((currentColor, index) =>
          index === 2 ? "purple" : currentColor
      );
      setColor(newColors);
}
function clickBig4() {
  const newColors = color.map((currentColor, index) =>
          index === 3 ? "yellow" : currentColor
      );
      setColor(newColors);
}


    return (
        <main className="container">
            <Square  color={color}/>
            <div className="btn">
              <div className="btm1">
                <button onClick={clickDj} className="dj">DJ</button>
                <button onClick={clickPartyDj} className="dj">Party DJ</button>
              </div>
              <div className="btn2">
                <button onClick={clickProDj1} className="dj">Pro DJ1</button>
                <button onClick={clickProDj2} className="dj">Pro DJ2</button>
              </div>
              <div className="btn3">
                <button onClick={clickBig1} className="dj">Big Time4</button>
                <button onClick={clickBig2} className="dj">Big Time1</button>
                <button onClick={clickBig3} className="dj">Big Time2</button>
                <button onClick={clickBig4} className="dj">Big Time3</button>
              </div>
              <div className="music">
                <button className="playsound" onClick={toggleMusic}>sond</button>
              <audio ref={audioRef}>
                <source src={song}  />
              </audio>
              </div>
            </div>
        </main>
    )
}
