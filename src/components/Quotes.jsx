import React, { useState } from 'react';
import styles from '../styles/Quotes.module.css'; // Correct path for importing CSS module

const Quotes = () => {
 
  const [present, setPresent] = useState(0);

  
  const testimonials = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "-Steve Jobs",
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "-Winston Churchill",
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      author: "-Lao Tzu",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "-Confucius",
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      author: "-Albert Einstein",
    },
    {
      quote: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "-Steve Jobs",
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      author: "-Henry David Thoreau",
    },
    {
      quote: "The harder I work, the luckier I get.",
      author: "-Gary Player",
    },
  ];

  
  function handleClick() {
    
    setPresent(index=>(index+1)%testimonials.length);
  }

  return (
    <div className={styles.testimonials}>
      <button onClick={handleClick} className={styles.testimonialsNavButton}>
        Press
      </button>
      <h2 className={styles.testimonialsQuote}>{testimonials[present].quote}</h2>
      <h2 className={styles.testimonialsQuote}>{testimonials[present].author}</h2>
    </div>
  );
};

export default Quotes;
