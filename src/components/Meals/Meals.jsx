import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Shop = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    const handleAddToList = (name) => {
        // console.log('name of the product is: ', name)
        const mealNameContainer = document.getElementById('meal-name-container')
        mealNameContainer.innerText = name
    }
    return (
        <div className='meals-container'>
            <div className='grid grid-cols-3 gap-10 p-10'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal} handleAddToList={handleAddToList}></Meal>)
                }
            </div>
            <div className='bg-[#FFE0B3] p-5 h-screen selected-meals-container'>
                <h1 className='text-4xl font-semibold mb-5'>Selected Meals</h1>
                <h2 className='text-2xl font-semibold'>Meal Name: <span id='meal-name-container' className='font-normal'></span></h2>
            </div>
        </div>
    );
};

export default Shop;