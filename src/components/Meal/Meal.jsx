import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
    console.log(meal);
    const { strMealThumb, strMeal, strCategory } = meal;
    return (
        <div style={{ margin: '10px', padding: '20px', border: '3px solid seagreen' }}>
            <img style={{ height: '300px' }} src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>{strCategory}</p>
            <Link to={`/meal/${strMeal}`}>Detail</Link>
        </div>
    );
};

export default Meal;