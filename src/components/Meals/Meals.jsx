import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    const meals = useLoaderData();
    console.log(meals.meals);
    return (
        <div>
            <h1>Total meals Available: {meals.meals.length}</h1>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
                {
                    meals.meals.map(meal => <Meal
                        key={meal.id}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;