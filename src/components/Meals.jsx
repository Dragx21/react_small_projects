import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Style.module.css';

const Meals = () => {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setMeal(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemslist = meal.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section key={idMeal} id="card">
        <section>
          <img src={strMealThumb} alt={strMeal} />
          <section className="content">
            <p>{strMeal}</p>
            <p>{idMeal}</p>
          </section>
        </section>
      </section>
    );
  });

  return (
    <div className='items-container'>
      {itemslist}
    </div>
  );
};

export default Meals;
