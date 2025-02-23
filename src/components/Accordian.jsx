import React, { useState } from 'react';
import styles from "../styles/Accordion.module.css";
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const Accordian = () => {
  const [list, setList] = useState(false);

  const details = [
    { Name: "Raghav Pareek", Age: 21 },
    { Name: "Anusha Pareek", Age: 22 },
    { Name: "Akshita Pareek", Age: 27 }
  ];

  const add = [
    { Name: "Devendra Pareek", Age: 55 },
    { Name: "Kusum Lata Pareek", Age: 53 },
    { Name: "Prem Lata Pareek", Age: 75 }
  ];

  function handleClick() {
    setList(true);
  }

  function handleClick1() {
    setList(false);
  }

  return (
    <section className="container">
      
      {details.map((person, index) => (
        <div className="accordion-card" key={index}>
          <h3>{person.Name}</h3>
          <p>Age: {person.Age}</p>
        </div>
      ))}

      
      {!list && <FaArrowDown className="icon" onClick={handleClick} />}

      
      {list ? (
        add.map((person, index) => (
          <div className="accordion-card" key={index}>
            <h3>{person.Name}</h3>
            <p>Age: {person.Age}</p>
          </div>
        ))
      ) : (
        <h3>See more</h3>
      )}

    
      {list && <FaArrowUp className="icon" onClick={handleClick1} />}
      {list && <h3>See less</h3>}
    </section>
  );
}

export default Accordian;
