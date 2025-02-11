import React, { useState } from 'react';
import styles from "../styles/Calc.module.css";

const Calculator = () => {
  const [value, setValue] = useState("");

  const emt = () => {
    setValue("");
  };

  function display(char) {
    setValue(value + char);
  }

  function calculate() {
    try {
      var ans = eval(value);
      setValue(ans);
    } catch (error) {
      setValue("Error");
    }
  }

  return (
    <form className={styles.calculator}>
      <input type="text" className={styles.value} value={value} readOnly />
      <span className={`${styles.num} ${styles.clear}`} onClick={emt}>C</span>
      <span className={styles.num} onClick={() => display("/")}>/</span>
      <span className={styles.num} onClick={() => display("*")}>*</span>
      <span className={styles.num} onClick={() => display("7")}>7</span>
      <span className={styles.num} onClick={() => display("8")}>8</span>
      <span className={styles.num} onClick={() => display("9")}>9</span>
      <span className={styles.num} onClick={() => display("-")}>-</span>
      <span className={styles.num} onClick={() => display("4")}>4</span>
      <span className={styles.num} onClick={() => display("5")}>5</span>
      <span className={styles.num} onClick={() => display("6")}>6</span>
      <span className={`${styles.num} ${styles.plus}`} onClick={() => display("+")}>+</span>
      <span className={styles.num} onClick={() => display("1")}>1</span>
      <span className={styles.num} onClick={() => display("2")}>2</span>
      <span className={styles.num} onClick={() => display("3")}>3</span>
      <span className={styles.num} onClick={() => display("0")}>0</span>
      <span className={styles.num} onClick={() => display("00")}>00</span>
      <span className={styles.num} onClick={() => display(".")}>.</span>
      <span className={`${styles.num} ${styles.equal}`} onClick={calculate}>=</span>
    </form>
  );
};

export default Calculator;


