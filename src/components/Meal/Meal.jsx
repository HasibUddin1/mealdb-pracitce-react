import React from 'react';

const Meal = (props) => {
    console.log(props)
    const {strArea, strMealThumb, strInstructions} = props.meal
    return (
        <div>
            <h1>This is Meal</h1>
        </div>
    );
};

export default Meal;