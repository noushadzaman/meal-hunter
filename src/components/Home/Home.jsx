import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <h1>Welcome to MEALDB</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;