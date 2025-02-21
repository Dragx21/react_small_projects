import React ,{useState} from 'react'
import { FaSearch } from "react-icons/fa";
import styles from "../styles/HiddenSearch.module.css"

function HiddenSearch() {
    const[bgcolor,setBgcolor]=useState("grey")
    const[show,setShow]=useState(false)
    function handlesearch(e){
        setBgcolor("#1a1a1a")
        if(e.target.className=="container"){
            setShow(false);
            setBgcolor("brown");
        }


    }
  return (
    <section onClick={handlesearch}
    className='container' style={{backgroundColor:bgcolor}}>
      
        {show ?(<input type="text" placeholder='Search...'/>):
        (<FaSearch onClick={() => setShow(true)} />
    )}
    </section>
  )
}

export default HiddenSearch
