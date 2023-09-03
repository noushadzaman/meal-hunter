import React from 'react';

const Meal = ({meal}) => {
    console.log(meal);
    return (
        <div style={{margin: '10px', padding: '20px', border: '3px solid seagreen'}}>
            <img style={{height: '300px'}} src={meal.strMealThumb} alt="" />
           <h2>This is meal{meal.strMeal}</h2>
           <p>{meal.strCategory}</p>
           {/* <Link to={}>Detail</Link>  */}
        </div>
    );
};

export default Meal;