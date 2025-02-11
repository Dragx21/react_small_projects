import React ,{useState}from 'react'
import styles from "../styles/Calc.module.css";


const Calculator = () => {
    const[value,setValue]=useState("")
const emt=()=>{setValue("")}
function display(char){
    setValue(value+char);
}


  return (
    <form >
        <input type="text" className="value"  value={value}/>
        <span className="num clear" onClick={emt}>C</span>

      
        <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span className="plus" onClick={()=> display("+")}>+</span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span class="num equal" onClick={() => calculate()}></span>
       

    </form>
  )
}

export default Calculator
