import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetail = () => {
    const mealDetail = useLoaderData();
    console.log(mealDetail.meals[0]);
    const mealInfo = mealDetail.meals[0];
    const { strCategory, strMealThumb, strMeal, strArea, strSource }=mealInfo;
    return (
        <div style={{ height: '1000px' }}>
            <img src={strMealThumb} alt="" />
            <h1>{strMeal}</h1>
            <h3>Category: {strCategory}</h3>
            <h3>Popular in: {strArea}</h3>
            <a href={strSource}>More Info</a>
        </div>
    );
};

export default MealDetail;