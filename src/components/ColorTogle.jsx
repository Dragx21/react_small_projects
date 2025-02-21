import React ,{useState}from 'react'
import styles from "../styles/ColorTogle.module.css"



const ColorTogle = () => {
    const[background,setBackground]=useState("white")
    const[text,setText]=useState("purple")
    const[buttonstyle,setButton]=useState("gold")
    function handleSubmit() {
        setBackground(background === "white" ? "gold" : "white");
        setText(text === "purple" ? "yellow" : "purple");
        setButton(buttonstyle === "gold" ? "navy" : "gold");
    }
    

  return (
    <section style={{ backgroundColor: background, color: text }}>
    <div >
    <button 
        style={{ backgroundColor: buttonstyle }} 
        onClick={handleSubmit}
    >
        Click me
    </button>
    <h1>Try clicking the button to see magic</h1>
</div>
</section>
  )
}

export default ColorTogle
